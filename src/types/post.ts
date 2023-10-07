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
    content: string;
}

export interface PostCategory extends BasePostData {

}

export interface PostFilter {
    seriesName?: string;
}

export interface PostListData {
    posts: PostCategory[];
    nextIndex: number | null;
}

export interface PostListResponse extends PostListData {
    count: number;
}


