import {PostCategory, PostData, PostFilter, PostListData} from '@/types/post';
import fs from 'fs';
import matter, {GrayMatterFile} from 'gray-matter';
import {Repository} from '@/server/repositories/index';
import {PATH_DIR_POST} from '@/constants/server';
import {SetFunc} from '@/utils/data';

export class PostRepository extends Repository {
    private static instance: PostRepository | null = null;
    private posts: PostCategory[] = [];
    private indexes: Map<string, number> = new Map();

    private async getPostDataFromStorage(postId: string): Promise<PostData> {
        const fullPath = `${PATH_DIR_POST}/${postId}.md`;
        const post: GrayMatterFile<string> = matter(fs.readFileSync(fullPath, 'utf-8'));

        return {
            id: postId,
            content: post.content,
            date: new Date(post.data.date),
            image: post.data.image,
            layout: post.data.layout,
            series: post.data.series,
            summary: post.data.summary,
            tags: post.data.tags,
            title: post.data.title,
        }
    }

    /**
     * 어플리케이션 부팅 및 Service 처음 사용 시
     * 모든 POST 파일들을 읽어 메모리에 저장한다
     * 포스트를 빠른 속도로 불러오기 위한 목적으로 사용되는 함수
     */
    private async collectPostsToMemory(): Promise<void> {
        const postFilenames: string[] = fs.readdirSync(PATH_DIR_POST);

        await Promise.all(postFilenames.map(async (filename) => {
            const postId = filename.slice(0, -3);
            await this.getPostDataFromStorage(
                postId
            ).then((postData) => {
                delete postData.content;
                this.posts.push(postData);
            }).catch(() => {}); // 파일을 못불러와도 그냥 패스
        }))

        this.posts.sort((c1, c2) => {
            let d1 = c1.date;
            let d2 = c2.date;
            if (d1 === d2) {
                return 0;
            } else if (d1 > d2) {
                return -1;
            } else {
                return 1;
            }
        });
        this.posts.forEach((post, index) => {
            this.indexes.set(post.id, index);
        });
    }

    protected async init() {
        await this.collectPostsToMemory();
    }

    public static async getInstance(): Promise<PostRepository> {
        if(!PostRepository.instance) {
            PostRepository.instance = new PostRepository();
            await PostRepository.instance.init();
        }
        return PostRepository.instance;
    }

    public getDetail(postId: string): PostData | null {
        const key: number | undefined = this.indexes.get(postId);
        if (key === undefined) {
            return null;
        }
        let postCategories: PostCategory = this.posts[key];

        const fullPath = `${PATH_DIR_POST}/${postId}.md`;
        if(!fs.existsSync(fullPath)) {
            return null;
        }

        const post: GrayMatterFile<string> = matter(fs.readFileSync(fullPath, 'utf-8'));
        return {
            ...postCategories,
            content: post.content,
        }
    }

    public getList(startIndex: number = 0, pageSize: number = 10, filter: PostFilter = {}): PostListData {
        let cnt = 0;
        const posts: PostCategory[] = [];
        let nextIndex = null;
        let tagSet: Set<string> | null = null;

        if (filter.tags !== undefined) {
            tagSet = new Set(filter.tags);
        }

        for (let i = startIndex; i < this.posts.length; i++) {
            const postCategory = this.posts[i];
            if (cnt === pageSize + 1) {
                break;
            }

            // Filtering (Exclude) Section
            if (filter.seriesName !== undefined && postCategory.series !== filter.seriesName) {
                continue;
            }
            if (tagSet) {
                const postTagSet = new Set<string>(postCategory.tags);
                if (!SetFunc.isSubset<string>(postTagSet, tagSet)) {
                    continue;
                }
            }

            posts.push(postCategory);
            cnt++;
        }

        if (cnt == pageSize + 1) {
            const lastPost = posts.at(-1);
            if(lastPost) {
                nextIndex = this.indexes.get(lastPost.id) ?? null;
                posts.pop();
            }
        }
        return {posts, nextIndex};
    }
}
