import {PostFilter} from '@/types/post';
import {useEffect} from 'react';
import {isWindowBottom} from '@/utils/window';
import {fetchPostList} from '@/hooks/posts/index';
import {POST_PAGINATION_SIZE} from '@/constants/client';
import useFetchPosts from '@/hooks/posts/useFetchPosts';

const usePostPagination = (
    host: string,
    pageSize: number = POST_PAGINATION_SIZE,
    filter: PostFilter = {}
) => {
    const {postListDataStatus, setPostListDataStatus} = useFetchPosts(host, pageSize, filter);

    useEffect(() => {
        const scrollHandler = async () => {
            if (isWindowBottom() && postListDataStatus.nextIndex !== null && !postListDataStatus.isLoading) {
                await fetchPostList(postListDataStatus, setPostListDataStatus, host, filter);
            }
        }
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [postListDataStatus]);

    return postListDataStatus;
}

export default usePostPagination;