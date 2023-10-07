import {Service} from '@/backend/services/index';
import {PostRepository} from '@/backend/repositories/post';
import {SeriesRepository} from '@/backend/repositories/series';
import {SeriesData} from '@/types/series';
import {PostListData} from '@/types/post';

export class SeriesService extends Service {
    private static instance: SeriesService | null = null;
    private postRepository: PostRepository;
    private seriesRepository: SeriesRepository;

    private async init() {
        this.postRepository = await PostRepository.getInstance();
        this.seriesRepository = await SeriesRepository.getInstance();
    }

    public static async getInstance(): Promise<SeriesService> {
        if(!SeriesService.instance) {
            SeriesService.instance = new SeriesService();
            await SeriesService.instance.init();
        }
        return SeriesService.instance;
    }

    public getList(): SeriesData[] {
        return this.seriesRepository.getList();
    }

    public getSeries(name: string): SeriesData | null {
        return this.seriesRepository.getSeries(name);
    }

    public getPostsFromSeries(seriesName: string, startIndex: number = 0, pageSize: number = 10): PostListData | null {
        if (this.seriesRepository.getSeries(seriesName) === null) {
            return null;
        }
        return this.postRepository.getList(startIndex, pageSize, {seriesName: seriesName});
    }
}