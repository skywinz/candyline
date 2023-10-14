'use client';

import PostListAboutSeriesItem from '@/components/series/detail/PostListAboutSeriesItem';
import styled from 'styled-components';
import {SERIES_POST_PAGINATION_SIZE} from '@/constants/client';
import usePostPagination from '@/hooks/posts/usePostPagination';

const PostListAboutSeriesContainer = ({seriesName, host}: {seriesName: string, host: string}) => {
    const postListDataStatus = usePostPagination(host, SERIES_POST_PAGINATION_SIZE, {seriesName: seriesName});
    const postListItems = postListDataStatus.posts.map((post, idx) =>
        <PostListAboutSeriesItem key={post.id} index={idx + 1} post={post} />);
    
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


export default PostListAboutSeriesContainer;