// base
export interface SeriesData {
    name: string;
    summary: string;
}


// request
export interface SeriesPostListRequest {
    name: string;
}

export interface SeriesDetailRequest {
    name: string;
}