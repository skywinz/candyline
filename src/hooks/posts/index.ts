import {PostFilter, PostListDataStatus} from '@/types/post';
import {getPostList} from '@/apis/internal/post';
import {CacheForComponentType} from '@/types/api';

export const fetchPostList = async (
    postListDataStatus: PostListDataStatus,
    setPostListDataStatus,
    host: string,
    filter: PostFilter
) => {
    if (postListDataStatus.nextIndex === null || postListDataStatus.isLoading) {
        return;
    }
    postListDataStatus.isLoading = true;
    const result: PostListDataStatus = await getPostList(
        host,
        CacheForComponentType.SERVER,
        filter,
        postListDataStatus.nextIndex,
    ).then((res) => {
        const {posts, nextIndex} = res;
        return {
            posts: postListDataStatus.posts.concat(posts),
            nextIndex: nextIndex,
            isError: false,
            isLoading: false,
        }
    }).catch(() => {
       return {
           ...postListDataStatus,
           isError: true,
           isLoading: false,
       }
    });
    setPostListDataStatus(result);
}
