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

}

export interface PostListResponse {
    posts: PostCategory[];
    count: number;
    nextIndex: number | null;
}
