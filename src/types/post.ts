export interface PostData {
    content: string;
    date: Date;
    image: string;
    layout: string;
    series: string;
    summary: string;
    tags: Array<string>;
    title: string;
}

export interface PostDataForRendering {
    content: string;
    date: string;
    image: string;
    layout: string;
    series: string;
    summary: string;
    tags: Array<string>;
    title: string;
}