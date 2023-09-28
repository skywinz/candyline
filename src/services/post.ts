import path from 'path';
import fs from 'fs';
import matter, {GrayMatterFile} from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

import {Service} from '@/services/index';
import {PostData} from '@/types/post';


export class BlogPostService extends Service {
    private static instance: BlogPostService | null = null;
    private directoryPath: string = path.join(process.cwd(), '_posts');
    private posts: Map<string, PostData>;

    private async getPostDataFromStorage(postId: string): Promise<PostData> {
        const fullPath = `${this.directoryPath}/${postId}.md`;
        const post: GrayMatterFile<string> = matter(fs.readFileSync(fullPath, 'utf-8'));
        const contentHtml = await remark().use(html).process(post.content);
        return {
            content: contentHtml.value,
            date: new Date(),
            image: post.data.image,
            layout: post.data.layout,
            series: post.data.series,
            summary: post.data.summary,
            tags: post.data.tags,
            title: post.data.title,
        }
    }

    private async collectPostsToMemory(): Promise<void> {
        this.posts = new Map<string, PostData>();
        const postFilenames: Array<string> = fs.readdirSync(this.directoryPath);

        await Promise.all(postFilenames.map(async (filename) => {
            const postId = filename.slice(0, -3);
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