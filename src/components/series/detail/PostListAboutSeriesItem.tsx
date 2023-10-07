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
            <td>{index}</td>
            <td><Link href={postUrl}>{title}</Link></td>
            <td>{dateString}</td>
        </Layout>
    );
}


const Layout = styled.tr`
`;

export default PostListAboutSeriesItem;