'use client';


import {PostCategory} from '@/types/post';
import styled from 'styled-components';
import TagList from '@/components/common/TagList';
import Link from 'next/link';
import {date2String} from '@/utils/date';
import {STYLE_LINK} from '@/constants/styles';

const PostListCard = ({post}: {post: PostCategory}) => {
    const {tags, title, summary, id, series, date} = post;
    const detailURL = `/posts/${id}`;
    const seriesURL = `/series/${series}`;
    const dateString = date2String(new Date(date));

    return (
        <Layout>
            <Link href={detailURL} style={STYLE_LINK}>
                <h2>{title}</h2>
            </Link>
            <Link href={seriesURL} style={STYLE_LINK}>
                <h4 style={{marginTop: '-40px', marginBottom: '-20px'}}>{series}</h4>
            </Link>
            <p>{summary}</p>
            <footer>
                <p>{dateString}</p>
                <hr />
                <TagList style={{marginTop: '10px'}} tags={tags} />
            </footer>
        </Layout>
    );
}

const Layout = styled.div`
    position: relative;
    height: 400px;
    background-color: ${(props) => props.theme.main.postList.postItemBackgroundColor};
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    margin-bottom: 100px;
    padding: 10px 30px 10px 30px;
    transition: background-color 0.2s;
  
    h2 {
        cursor: pointer;
        color: ${(props) => props.theme.main.postList.postItemTitleColor};
        text-decoration: none;
    }
    h4 {
        display: inline-block;
        padding: 5px 20px 5px 20px;
        background-color: ${(props) => props.theme.main.postList.postItemSeriesBackgroundColor};
        color: ${(props) => props.theme.main.postList.postItemSeriesFontColor};
      
        &:hover {
          background-color: ${(props) => props.theme.main.postList.postItemSeriesBackgroundColorHovered};
        }
    }

    footer {
        p {
            font-size: 0.8em;
        }
      
        position: absolute;
        width: 90%;
        bottom: 0;
        height: 120px;
    }
  
    &:hover {
      background-color: ${(props) => props.theme.main.postList.postItemHoveredBackgroundColor};
    }
`;


export default PostListCard;