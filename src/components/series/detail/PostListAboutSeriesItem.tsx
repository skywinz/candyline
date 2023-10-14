'use client';

import {PostCategory} from '@/types/post';
import {date2String} from '@/utils/date';
import styled from 'styled-components';
import Link from 'next/link';

const PostListAboutSeriesItem = ({post, index}: {post: PostCategory, index: number}) => {
    const { date, title, id } = post;
    const postUrl = `/posts/${id}`;

    const dateString = date2String(new Date(date));

    return (
        <Layout>
            <p className='index'>{index}</p>
            <p className='title'><Link href={postUrl}>{title}</Link></p>
            <p className='date'>{dateString}</p>
        </Layout>
    );
}

const Layout = styled.li`
    width: 100%;
    display: flex;
    background-color: ${(props) => props.theme.main.seriesDetail.postItemBackgroundColor};
    transition: background-color 0.2s;
    padding: 2px 0 2px 0;
    
    &:hover {
        background-color: ${(props) => props.theme.main.seriesDetail.postItemBackgroundColorHovered};
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
    }
    
    .index {
        flex: 1;
    }
    .title {
        flex: 7;
        a {
            color: ${(props) => props.theme.main.seriesDetail.postItemFontColor};
        }
    }
    .date {
        flex: 2;
    }
`;

export default PostListAboutSeriesItem;