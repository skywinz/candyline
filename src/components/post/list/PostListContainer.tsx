'use client';

import {useEffect, useState} from 'react';
import {isWindowBottom} from '@/utils/window';
import {PostCategory} from '@/types/post';
import {getPostList} from '@/apis/internal/post';
import {CacheForComponentType} from '@/types/api';
import PostListCard from '@/components/post/list/PostListCard';
import styled from 'styled-components';


interface PostListDataStatus {
    posts: PostCategory[],
    nextIndex: number | null,
    isError: boolean,
    isLoading: boolean,
}

const PostListContainer = ({host}: {host: string}) => {

    const [postListData, setPostListData] = useState<PostListDataStatus>({
        posts: [],
        nextIndex: 0,
        isError: false,
        isLoading: false,
    });

    const fetchData = async () => {
        if (postListData.nextIndex === null || postListData.isLoading) {
            return;
        }
        postListData.isLoading = true;
        const result: PostListDataStatus = await getPostList(host, postListData.nextIndex, CacheForComponentType.SERVER)
            .then((res) => {
                const {posts, nextIndex} = res;
                return {
                    posts: postListData.posts.concat(posts),
                    nextIndex: nextIndex,
                    isError: false,
                    isLoading: false,
                }
            }).catch(() => {
                return {
                    ...postListData,
                    isError: true,
                    isLoading: false,
                }
            });
        setPostListData(result);
    }

    useEffect(() => {
        // 처음 세팅
        fetchData().then();
    }, []);

    useEffect(() => {
        // 스크롤이 맨 밑으로 갈 때마다 작동
        const scrollHandler = () => {
            if (isWindowBottom() && postListData.nextIndex !== null && !postListData.isLoading) {
                fetchData().then();
            }
        }
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [postListData]);

    const PostItemComponents = postListData.posts.map((post) => <PostListCard key={post.id} post={post} />);

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