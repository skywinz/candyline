import {PostFilter, PostListDataStatus} from '@/types/post';
import {getPostList} from '@/apis/internal/post';

export const fetchPostList = async (
    postListDataStatus: PostListDataStatus,
    setPostListDataStatus: any,
    host: string,
    filter: PostFilter
) => {
    if (postListDataStatus.nextIndex === null || postListDataStatus.isLoading) {
        return;
    }
    postListDataStatus.isLoading = true;
    const result: PostListDataStatus = await getPostList(
        host,
        'no-cache',
        filter,
        postListDataStatus.nextIndex,
    ).then((res) => {
        if (res.statusCode === 500) {
            throw Error('Got Error');
        }

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
