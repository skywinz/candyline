import {PostData, PostListData} from '@/types/post';

export interface SeriesData {
    name: string;
    summary: string;
}

export interface PostListBySeriesResponse extends PostListData{
    statusCode: number;
}
