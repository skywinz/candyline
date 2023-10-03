import {PostListResponse} from '@/types/post';
import {ErrorResponse} from '@/types';
import {postListSize} from '@/constants';

export const getPostDetail = async (host: string, id: string, componentType): Promise<object> => {
    const res = await fetch(`${host}/api/posts/${id}`, {cache: componentType});
    const statusCode = res.status;

    if (res.ok) {
        const data = await res.json();
        return { data, statusCode }
    } else {
        return { statusCode }
    }
}

export const getPostList = async (host: string, index: number, componentType): Promise<PostListResponse | ErrorResponse> => {
    const res = await fetch(`${host}/api/posts?offset=${index}&size=${postListSize}`, {cache: componentType});
    if (res.ok) {
        const data = await res.json();
        return {
            statusCode: 200,
            ...data,
        }
    } else {
        return {
            statusCode: 500,
        }
    }
}
