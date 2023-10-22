'use client';

import {PostCategory} from '@/types/post';
import styled from 'styled-components';
import TagList from '@/components/common/TagList';
import Link from 'next/link';
import {date2String} from '@/utils/date';
import {STYLE_LINK} from '@/constants/styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const PostListCard = ({post}: {post?: PostCategory}) => {
    const {tags, title, summary, id, series, date} = post ? post : {tags: [], title: '', summary: '', id: '', series: '', date: ''};
    const detailURL = `/posts/${id}`;
    const seriesURL = `/series/${series}`;
    const dateString = date ? date2String(new Date(date)) : '';

    return (
        <Layout>
            <Link href={detailURL} style={STYLE_LINK}>
                <h2 className='title'>{title || <Skeleton />}</h2>
            </Link>
            <div className='subContent'>
                {
                    series && (
                        <Link href={seriesURL} style={STYLE_LINK}>
                            <p className='series'>Series: {series}</p>
                        </Link>
                    )
                }
                {
                    !series && (
                        <p><Skeleton /></p>
                    )
                }
                <p className='date'>{dateString || <Skeleton />}</p>
            </div>
            <div className='summary'>
                <p>{summary || <Skeleton />}</p>
            </div>
            <footer>
                <hr />
                {tags && <TagList tags={tags} />}
            </footer>
        </Layout>
    );
}

const Layout = styled.div`
    background-color: ${(props) => props.theme.main.postList.postItemBackgroundColor};
    box-shadow: ${(props) => props.theme.main.postList.postItemShadowColor} 0 2px 8px 0;
    margin-bottom: 70px;
    padding: 20px 30px 10px 30px;
    border-left: 8px solid ${(props) => props.theme.main.postList.postItemBorderColor};
    transition: box-shadow 0.2s, background-color 0.5s ease, border-left-color 0.5s ease;
  
    &:hover {
        box-shadow: ${(props) => props.theme.main.postList.postItemShadowColorHovered} 0 2px 8px 0;
    }
  
    .title {
        margin-top: 0;
        margin-bottom: 20px;
        font-weight: 400;
        cursor: pointer;
        color: ${(props) => props.theme.main.postList.postItemTitleColor};
        text-decoration: none;
        transition: color 0.2s;
        &:hover {
            color: ${(props) => props.theme.main.postList.postItemTitleHoveredColor};
        }
    }
    .subContent {
        display: flex;
        margin-top: -30px;
        justify-content: space-between;

      .series {
          flex: 1;
          color: ${(props) => props.theme.main.postList.postItemSeriesFontColor};
          text-align: left;
          transition: color 0.2s;
        
          &:hover {
              color: ${(props) => props.theme.main.postList.postItemSeriesFontColorHovered};
          }
      }
      .date {
          flex: 1;
          text-align: right;
          font-size: 0.8em;
      }
    }
  
    .summary {
        margin-bottom: 20px;
        border-radius: 5px;
        color: ${(props) => props.theme.main.postList.postListItemSummaryFontColor};
    }

    footer {
        margin-bottom: 30px;
        p {
            text-align: right;
            font-size: 0.8em;
        }
        hr {
            margin-bottom: 10px;
        }
    }
`;


export default PostListCard;