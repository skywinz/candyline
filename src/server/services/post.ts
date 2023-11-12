import {Service} from '@/server/services/index';
import {PostData, PostFilter} from '@/types/post';
import {PostRepository} from '@/server/repositories/post';


export class BlogPostService extends Service {
    private static instance: BlogPostService | null = null;
    private repository: PostRepository | null = null;


    private async init() {
        this.repository = await PostRepository.getInstance();
    }

    public static async getInstance(): Promise<BlogPostService> {
        if(!BlogPostService.instance) {
            BlogPostService.instance = new BlogPostService();
            await BlogPostService.instance.init();
        }
        return BlogPostService.instance;
    }

    public async getDetail(postId: string): Promise<PostData | null | undefined> {
        return this.repository?.getDetail(postId);
    }

    public async getList(startIndex: number = 99999999, pageSize: number = 10, filter: PostFilter = {}) {
        return this.repository?.getList(startIndex, pageSize, filter);
    }
}