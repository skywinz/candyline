import {Service} from '@/server/services/index';
import {PostRepository} from '@/server/repositories/post';
import {SeriesRepository} from '@/server/repositories/series';
import {SeriesData} from '@/types/series';
import {PostListData} from '@/types/post';

export class SeriesService extends Service {
    private static instance: SeriesService | null = null;
    private postRepository: PostRepository | null = null;
    private seriesRepository: SeriesRepository | null = null;

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
        if(!(this.seriesRepository && this.postRepository)) {
            throw new Error("Initial Failed Error");
        }

        return this.seriesRepository.getList();
    }

    public getSeries(name: string): SeriesData | null {
        if(!(this.seriesRepository && this.postRepository)) {
            throw new Error("Initial Failed Error");
        }

        return this.seriesRepository.getSeries(name);
    }

    public getPostsFromSeries(seriesName: string, startIndex: number = 0, pageSize: number = 10): PostListData | null {
        if(!(this.seriesRepository && this.postRepository)) {
            throw new Error("Initial Failed Error");
        }

        if (this.seriesRepository.getSeries(seriesName) === null) {
            return null;
        }
        return this.postRepository.getList(startIndex, pageSize, {seriesName: seriesName});
    }
}