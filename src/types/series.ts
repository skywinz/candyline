// base
export interface SeriesData {
    name: string;
    summary: string;
    image?: string;
}


// request
export interface SeriesPostListRequest {
    name: string;
}

export interface SeriesDetailRequest {
    name: string;
}