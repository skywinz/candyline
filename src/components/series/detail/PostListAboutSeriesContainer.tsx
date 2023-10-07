'use client';

import PostListAboutSeriesItem from '@/components/series/detail/PostListAboutSeriesItem';
import styled from 'styled-components';
import {SERIES_POST_PAGINATION_SIZE} from '@/constants/client';
import usePostPagination from '@/hooks/posts/usePostPagination';

const PostListAboutSeriesContainer = ({seriesName, host}: {seriesName: string, host: string}) => {
    const postListDataStatus = usePostPagination(host, SERIES_POST_PAGINATION_SIZE, {seriesName: seriesName});
    const PostListItems = postListDataStatus.posts.map((post, idx) =>
        <PostListAboutSeriesItem key={post.id} index={idx + 1} post={post} />);

    return (
        <Layout>
            <table>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>날짜</th>
                </tr>
                </thead>
                <tbody>
                {PostListItems}
                </tbody>
            </table>
        </Layout>

    );
}

const Layout = styled.div`
    table {
      width: 100%;
    }
`;


export default PostListAboutSeriesContainer;