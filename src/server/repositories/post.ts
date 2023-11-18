import fs from 'fs';
import matter, {GrayMatterFile} from 'gray-matter';
import {Model, Op, WhereOptions} from 'sequelize';
import {PostCategory, PostData, PostFilter, PostListData, PrevNextPostItem} from '@/types/post';
import {Repository} from '@/server/repositories/index';
import {PATH_DIR_POST} from '@/constants/server';
import {Post, PostAttributes, PostTag, PostTagAttributes} from '@/server/models';
import PostCategoryCombinator from '@/server/db-combinator/post';

export class PostRepository extends Repository {
    public async getDetail(postId: string): Promise<PostData | null> {
        const postInstance: Model<PostAttributes> | null = await Post.findOne({where: { id: postId }});
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

        const prevPostInstance: Model<PostAttributes> | null = await Post.findOne({
            where: {
                seriesName: { [Op.eq]: postCategory.series },
                publicDate: { [Op.lt]: postCategory.date }
            },
            order: [['publicDate', 'DESC']],
            limit: 1,
        });
        const nextPostInstance: Model<PostAttributes> | null = await Post.findOne({
            where: {
                seriesName: { [Op.eq]: postCategory.series },
                publicDate: { [Op.gt]: postCategory.date }
            },
            order: [['publicDate', 'ASC']],
            limit: 1,
        });

        const prev: PrevNextPostItem | null = (
            prevPostInstance ? {
                id: prevPostInstance.dataValues.id,
                title: prevPostInstance.dataValues.title
            } : null
        );
        const next: PrevNextPostItem | null = (
            nextPostInstance ? {
                id: nextPostInstance.dataValues.id,
                title: nextPostInstance.dataValues.title
            } : null
        );

        const post: GrayMatterFile<string> = matter(fs.readFileSync(fullPath, 'utf-8'));
        return {
            ...postCategory,
            content: post.content,
            prev, next,
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
