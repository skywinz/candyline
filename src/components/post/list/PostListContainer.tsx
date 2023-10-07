'use client';

import PostListCard from '@/components/post/list/PostListCard';
import styled from 'styled-components';
import usePostPagination from '@/hooks/posts/usePostPagination';

const PostListContainer = ({host}: {host: string}) => {
    const postListDataStatus = usePostPagination(host);
    const PostItemComponents = postListDataStatus.posts.map((post) => <PostListCard key={post.id} post={post} />);
    return (
        <Layout>
            {PostItemComponents}
        </Layout>
    );
}


const Layout = styled.div`
    margin-top: 80px;
    margin-bottom: 50px;
`;


export default PostListContainer;