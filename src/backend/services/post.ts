import {Service} from '@/backend/services/index';
import {PostFilter} from '@/types/post';
import {PostRepository} from '@/backend/repositories/post';


export class BlogPostService extends Service {
    private static instance: BlogPostService | null = null;
    private repository: PostRepository;


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

    public getDetail(postId: string) {
        return this.repository.getDetail(postId);
    }

    public getList(startIndex: number = 0, pageSize: number = 10, filter: PostFilter = {}) {
        return this.repository.getList(startIndex, pageSize, filter);
    }
}