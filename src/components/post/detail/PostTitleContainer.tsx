'use client';

import styled from 'styled-components';

interface PostTitleContainerParams {
    title: string,
    date: Date,
    series: string,
}

const PostTitleContainer = (params: PostTitleContainerParams) => {
    const date = params.date;
    const stringDate = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()} ${date.getHours()}시 ${date.getMinutes()}분`;
    const {title, series} = params;

    return (
        <Layout>
            <Title>{title}</Title>
            <SeriesText>{series}</SeriesText>
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
`;

const SeriesText = styled.p`
    
`;


const DateText = styled.p`
    margin-top: 100px;
    font-size: 0.8em;
`;

export default PostTitleContainer;
