import React from 'react';
import PostListContainer from '@/components/post/list/PostListContainer';
import {getInternalAPIHost} from '@/apis/internal';

const PostListPage = async () => {
    return (
        <>
            <PostListContainer host={getInternalAPIHost()} />
        </>
    );
}
export default PostListPage;