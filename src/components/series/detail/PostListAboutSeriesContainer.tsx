'use client';

import {PostCategory} from '@/types/post';
import {useEffect, useState} from 'react';
import {getPostsBySeriesName} from '@/apis/internal/series';
import {CacheForComponentType} from '@/types/api';
import {isWindowBottom} from '@/utils/window';
import PostListAboutSeriesItem from '@/components/series/detail/PostListAboutSeriesItem';
import styled from 'styled-components';

interface PostListDataStatus {
    posts: PostCategory[];
    nextIndex: number | null;
    isError: boolean;
    isLoading: boolean;
}

const PostListAboutSeriesContainer = ({seriesName, host}: {seriesName: string, host: string}) => {
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
        const result = await getPostsBySeriesName(host, seriesName, postListData.nextIndex, CacheForComponentType.SERVER)
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
            })
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

    const PostListItems = postListData.posts.map((post, idx) => <PostListAboutSeriesItem key={post.id} index={idx + 1} post={post} />);

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