import fs from 'fs';
import matter, {GrayMatterFile} from 'gray-matter';
import {Model, Op, WhereOptions} from 'sequelize';
import {PostCategory, PostData, PostFilter, PostListData} from '@/types/post';
import {Repository} from '@/server/repositories/index';
import {PATH_DIR_POST} from '@/constants/server';
import {Post, PostAttributes, PostTag, PostTagAttributes} from '@/server/models';
import PostCategoryCombinator from '@/server/db-combinator/post';

export class PostRepository extends Repository {
    private static instance: PostRepository | null = null;

    protected async init() {}

    public static async getInstance(): Promise<PostRepository> {
        if(!PostRepository.instance) {
            PostRepository.instance = new PostRepository();
            await PostRepository.instance.init();
        }
        return PostRepository.instance;
    }

    public async getDetail(postId: string): Promise<PostData | null> {
        const postInstance: Model<PostAttributes> | null = await Post.findOne({
            where: { id: postId }
        });

        if (!postInstance) {
            return null;
        }

        const tagInstances: Model<PostTagAttributes>[] = await PostTag.findAll({
            where: {postPk: postInstance.dataValues.pk}
        });

        const postCategory = new PostCategoryCombinator(postInstance, tagInstances).get();

        const fullPath = `${PATH_DIR_POST}/${postId}.md`;
        if(!fs.existsSync(fullPath)) {
            return null;
        }

        const post: GrayMatterFile<string> = matter(fs.readFileSync(fullPath, 'utf-8'));
        return {
            ...postCategory,
            content: post.content,
        }
    }

    public async getList(startIndex: number, pageSize: number = 10, filter: PostFilter = {}): Promise<PostListData> {
        const queryFilter: WhereOptions = {
            pk: {
                [Op.lt]: startIndex,
            }
        };
        const tagQueryFilter: WhereOptions = {};

        if (filter.tags !== undefined) {
            tagQueryFilter.name = { [Op.in]: filter.tags };
        }
        if (filter.word) {
            queryFilter.title = { [Op.like]: `%${filter.word}%` };
        }
        if (filter.seriesName) {
            queryFilter.seriesName = filter.seriesName;
        }

        const postInstances: Model<PostAttributes>[] = await Post.findAll({
            include: [{
                model: PostTag,
                attributes: ['name'],
                as: 'postTags',
                where: tagQueryFilter,
            }],
            where: queryFilter,
            limit: pageSize,
            order: [['pk', 'DESC']]
        }) || [];

        const posts: PostCategory[] = postInstances.map((postInstance) =>
            new PostCategoryCombinator(postInstance).get());

        let nextIndex = null;
        if (postInstances.length > 0) {
            const nextStartPk = postInstances[postInstances.length - 1].dataValues.pk;
            const { count } = await Post.findAndCountAll({
                where: {
                    pk: {
                        [Op.lt]: nextStartPk,
                    }
                },
                limit: pageSize,
            });
            if (count) {
                nextIndex = nextStartPk;
            }
        }
        return {posts, nextIndex};
    }
}
