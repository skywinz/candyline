
// Base
export interface BasePostData {
    id: string;
    date: Date;
    image?: string;
    series?: string;
    summary?: string;
    tags: string[];
    title: string;
}


export interface PrevNextPostItem {
    id: string;
    title: string;
}

export interface PostData extends BasePostData {
    content?: string;
    prev?: PrevNextPostItem | null;
    next?: PrevNextPostItem | null;
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

// Hook
export interface PostListDataStatus {
    posts: PostCategory[],
    nextIndex: number | null,
    isError: boolean,
    isLoading: boolean,
}
