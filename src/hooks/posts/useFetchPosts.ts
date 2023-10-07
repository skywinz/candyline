import {PostFilter, PostListDataStatus} from '@/types/post';
import {useEffect, useState} from 'react';
import {fetchPostList} from '@/hooks/posts/index';
import {POST_PAGINATION_SIZE} from '@/constants/client';


const useFetchPosts = (
    host: string,
    pageSize: number =  POST_PAGINATION_SIZE,
    filter: PostFilter = {}
) => {
    const [postListDataStatus, setPostListDataStatus] = useState<PostListDataStatus>({
        posts: [],
        nextIndex: 0,
        isError: false,
        isLoading: false,
    });

    useEffect(() => {
        fetchPostList(postListDataStatus, setPostListDataStatus, host, filter).then();
    }, []);

    return {
        postListDataStatus,
        setPostListDataStatus,
    }
}


export default useFetchPosts;