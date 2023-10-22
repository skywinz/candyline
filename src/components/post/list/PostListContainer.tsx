'use client';

import PostListCard from '@/components/post/list/PostListCard';
import styled from 'styled-components';
import usePostPagination from '@/hooks/posts/usePostPagination';
import { useSearchParams } from 'next/navigation';
import {PostFilter} from '@/types/post';
import {POST_PAGINATION_SIZE} from '@/constants/client';


const PostListContainer = ({host}: {host: string}) => {
    const searchParams = useSearchParams();
    const word = searchParams.get('word');

    const filter: PostFilter = {}

    if (word) {
        filter.word = word;
    }

    const postListDataStatus = usePostPagination(host, POST_PAGINATION_SIZE, filter);
    const PostItemComponents = postListDataStatus.posts.map((post) => <PostListCard key={post.id} post={post} />);
    const loadingComponents = Array.from({length: 4}, (_, idx) => <PostListCard key={idx}/>)

    return (
        <Layout>
            {postListDataStatus.isLoading && loadingComponents}
            {PostItemComponents}
        </Layout>
    );
}


const Layout = styled.div`
    margin-top: 80px;
    margin-bottom: 50px;
`;


export default PostListContainer;