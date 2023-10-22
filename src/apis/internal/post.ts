import {PostFilter} from '@/types/post';
import {POST_PAGINATION_SIZE} from '@/constants/client';

export const getPostDetail = async (
    host: string,
    id: string,
    cache: RequestCache,
) => {
    const res = await fetch(`${host}/api/posts/${id}`, { cache });
    const statusCode = res.status;

    if (res.ok) {
        const data = await res.json();
        return { data, statusCode }
    } else {
        return { statusCode }
    }
}

export const getPostList = async (
        host: string,
        cache: RequestCache,
        postFilter: PostFilter = {},
        index: number = 0,
        pageSize: number = POST_PAGINATION_SIZE
) => {

    let url = `${host}/api/posts?offset=${index}&size=${pageSize}`;
    Object.keys(postFilter).forEach((filterKey) => {
        if (filterKey) {
            url += `&${filterKey}=${postFilter[filterKey as keyof PostFilter]}`;
        }
    });

    const res = await fetch(url, { cache });
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
