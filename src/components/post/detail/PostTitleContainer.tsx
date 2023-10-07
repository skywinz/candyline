'use client';

import styled from 'styled-components';
import {date2String} from '@/utils/date';
import Link from 'next/link';

interface PostTitleContainerParams {
    title: string,
    date: Date,
    series: string,
}

const PostTitleContainer = (params: PostTitleContainerParams) => {
    const date = params.date;
    const stringDate = date2String(date, true);
    const {title, series} = params;
    const seriesURL = `/series/${series}`;

    return (
        <Layout>
            <Title>{title}</Title>
            <Link href={seriesURL} style={{textDecoration: 'none'}}>
                <SeriesText>시리즈: {series}</SeriesText>
            </Link>
            <DateText style={{textAlign: 'right'}}>{stringDate}</DateText>
        </Layout>
    );
}

const Layout = styled.div`
    margin-top: 80px;
    margin-bottom: 50px;
    text-align: center;
`;

const Title = styled.p`
    width: auto;
    color: ${(props) => props.theme.main.postDetail.titleFontColor};
    background-color: ${(props) => props.theme.main.postDetail.titleBackgroundColor};
    border: none;
    padding: 10px 34px 10px 34px;
    display: inline-block;
    font-size: 2em;
    margin-bottom: -1px;
    font-weight: 400;
`;

const SeriesText = styled.p`
    font-weight: 400;
    color: ${(props) => props.theme.main.postDetail.seriesFontColor};
    
    &:hover {
        color: ${(props) => props.theme.main.postDetail.hoveredSeriesFontColor}
    }
  
`;


const DateText = styled.p`
    margin-top: 100px;
    font-size: 0.8em;
`;

export default PostTitleContainer;
