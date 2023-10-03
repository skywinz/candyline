import {ResponseInterface} from '@/types/index';

export const CacheForComponentType = {
    SERVER: 'no-cache',
    CLIENT: 'force-cache',
}


export interface GetPostDetailParams {
    id: string,
}

export interface GetPostsParams extends ResponseInterface {
    size: number,
    offset: number,
}
