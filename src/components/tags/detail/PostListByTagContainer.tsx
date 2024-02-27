'use client';


import usePostPagination from '@/hooks/posts/usePostPagination';
import {TAG_POST_PAGINATION_SIZE} from '@/constants/client';
import styled from 'styled-components';
import PostListByTagItem from '@/components/tags/detail/PostListByTagItem';

interface PostListByTagContainerArgs {
    tagName: string;
    host: string;
}

const PostListbyTagContainer = ({tagName, host}: PostListByTagContainerArgs) => {
    const postListDataStatus = usePostPagination(host, TAG_POST_PAGINATION_SIZE, {tags: [tagName]});
    const postListItems = postListDataStatus.posts.map((post, idx) =>
        <PostListByTagItem key={post.serialCode} post={post} index={idx + 1} />);

    return (
        <Layout>
            <ul>
                {postListItems}
            </ul>
        </Layout>
    );
}

const Layout = styled.div`
`;

export default PostListbyTagContainer;