'use client';

import {SeriesData} from '@/types/series';
import styled from 'styled-components';
import Link from 'next/link';

const SeriesCard = (data: SeriesData) => {
    const {name, summary} = data;
    const detailUrl = `/series/${name}`;

    return (
        <Layout>
            <Link style={{textDecoration: 'none'}} href={detailUrl}><h2>{name}</h2></Link>
            <p>{summary}</p>
        </Layout>
    );
}

const Layout = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    height: 400px;
    display: initial;
    text-align: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    background-color: ${(props) => props.theme.main.seriesList.itemBackgroundColor};
    transition: background-color 0.2s;
  
    &:hover {
        background-color: ${(props) => props.theme.main.seriesList.hoveredItemBackgroundColor};
    }
    h2 {
        color: ${(props) => props.theme.main.seriesList.itemTitleColor};
    }
`;
export default SeriesCard;