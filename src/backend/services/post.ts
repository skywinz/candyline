import path from 'path';
import fs from 'fs';
import matter, {GrayMatterFile} from 'gray-matter';

import {Service} from '@/backend/services/index';
import {PostData} from '@/types/post';


export class BlogPostService extends Service {
    private static instance: BlogPostService | null = null;
    private directoryPath: string = path.join(process.cwd(), '_posts');
    private posts: Map<string, PostData>;

    private async getPostDataFromStorage(postId: string): Promise<PostData> {
        const fullPath = `${this.directoryPath}/${postId}.mdx`;
        const post: GrayMatterFile<string> = matter(fs.readFileSync(fullPath, 'utf-8'));

        return {
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
     * TODO 단 데이터용량에 대한 이슈가 발생할 수 있으므로 추후 개선이 필요
     */
    private async collectPostsToMemory(): Promise<void> {
        this.posts = new Map<string, PostData>();
        const postFilenames: Array<string> = fs.readdirSync(this.directoryPath);

        await Promise.all(postFilenames.map(async (filename) => {
            const postId = filename.slice(0, -4);
            await this.getPostDataFromStorage(
                postId
            ).then((postData) => {
                this.posts.set(postId, postData);
            }).catch(() => {}); // 파일을 못불러와도 그냥 패스
        }))
    }
    private async init() {
        await this.collectPostsToMemory();
    }

    public static async getInstance(): Promise<BlogPostService> {
        if(!BlogPostService.instance) {
            BlogPostService.instance = new BlogPostService();
            await BlogPostService.instance.init();
        }
        return BlogPostService.instance;
    }

    public getPost(postId: string): PostData | null {
        if(!this.posts.has(postId)) {
            return null;
        }
        let postFileName: PostData | undefined | null = this.posts.get(postId);

        if (!postFileName) {
            postFileName = null;
        }
        return postFileName;
    }
}