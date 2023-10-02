export interface BasePostData {
    date: Date;
    image: string;
    layout: string;
    series: string;
    summary: string;
    tags: Array<string>;
    title: string;
}

export interface PostData extends BasePostData{
    content: string;
}

export interface PostCategories extends BasePostData {

}