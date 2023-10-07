import path from 'path';
import {PostCategory, PostData, PostFilter, PostListData} from '@/types/post';
import fs from 'fs';
import matter, {GrayMatterFile} from 'gray-matter';
import {Repository} from '@/backend/repositories/index';

export class PostRepository extends Repository {
    private static instance: PostRepository | null = null;
    private directoryPath: string = path.join(process.cwd(), '_posts');
    private posts: PostCategory[];
    private indexes: Map<string, number>;

    private async getPostDataFromStorage(postId: string): Promise<PostData> {
        const fullPath = `${this.directoryPath}/${postId}.md`;
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
        this.posts = [];
        this.indexes = new Map<string, number>();
        const postFilenames: string[] = fs.readdirSync(this.directoryPath);

        await Promise.all(postFilenames.map(async (filename) => {
            const postId = filename.slice(0, -3);
            await this.getPostDataFromStorage(
                postId
            ).then((postData) => {
                delete postData.content;
                this.posts.push(postData);
                this.indexes.set(postId, this.posts.length - 1);
            }).catch(() => {}); // 파일을 못불러와도 그냥 패스
        }))

        this.posts.sort((d1, d2) => {
            if (d1 === d2) {
                return 0;
            } else if (d1 > d2) {
                return -1;
            } else {
                return 1;
            }
        })
    }

    private async init() {
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
        if(!this.indexes.has(postId)) {
            return null;
        }
        let postCategories: PostCategory | undefined | null = this.posts[this.indexes.get(postId)];

        if (!postCategories) {
            return null;
        }

        const fullPath = `${this.directoryPath}/${postId}.md`;
        const post: GrayMatterFile<string> = matter(fs.readFileSync(fullPath, 'utf-8'));

        return {
            ...postCategories,
            content: post.content,
        }
    }

    public getList(startIndex: number = 0, pageSize: number = 10, filter: PostFilter = {}): PostListData {
        let cnt = 0;
        const posts: PostCategory[] = [];

        for (let i = startIndex; i < this.posts.length; i++) {
            const postCategory = this.posts[i];
            if (cnt === pageSize + 1) {
                break;
            }

            // Filtering (Exclude) Section
            if (filter.seriesName !== undefined && postCategory.series !== filter.seriesName) {
                continue;
            }

            posts.push(postCategory);
            cnt++;
        }

        let nextIndex = null;
        if (cnt == pageSize + 1) {
            nextIndex = this.indexes.get(posts.at(-1).id)
            posts.pop();
        }

        return {posts, nextIndex};
    }

}
