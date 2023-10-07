import {PostFilter, PostListDataStatus} from '@/types/post';
import {useEffect, useState} from 'react';
import {fetchPostList} from '@/hooks/posts/index';
import {postListSize} from '@/constants';


const useFetchPosts = (
    host: string,
    pageSize: number =  postListSize,
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