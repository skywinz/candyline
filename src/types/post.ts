import {ResponseInterface} from '@/types/index';

// Base
export interface BasePostData {
    id: string;
    date: Date;
    image: string;
    layout: string;
    series: string;
    summary: string;
    tags: Array<string>;
    title: string;
}

export interface PostData extends BasePostData {
    content?: string;
}

export interface PostCategory extends BasePostData {}


// pagination
export interface PostListData {
    posts: PostCategory[];
    nextIndex: number | null;
}


// Search Filter
export interface PostFilter {
    seriesName?: string;
    tags?: string[];
    word?: string;
}


// Request
export interface PostDetailRequest {
    id: string;
}


// Response
export interface PostListResponse extends PostListData, ResponseInterface {
    count: number;
}

export interface PostDetailResponse extends ResponseInterface {
    data: PostData;
}

// Hook
export interface PostListDataStatus {
    posts: PostCategory[],
    nextIndex: number | null,
    isError: boolean,
    isLoading: boolean,
}
