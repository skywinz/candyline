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
    border-top: 8px solid ${(props) => props.theme.main.seriesList.itemBorderColor};
    padding: 30px 20px 30px 20px;
    height: auto;
    display: initial;
    text-align: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    background-color: ${(props) => props.theme.main.seriesList.itemBackgroundColor};
    transition: box-shadow 0.2s, background-color 0.5s ease, color 0.5s ease;
    
    &:hover {
        box-shadow: ${(props) => props.theme.main.seriesList.itemShadowColorHovered} 0 2px 8px 0;
    }
  
    h2 {
        font-weight: 400;
        margin-top: 0;
        color: ${(props) => props.theme.main.seriesList.itemTitleColor};
        transition: color 0.2s;
        &:hover {
            color: ${(props) => props.theme.main.seriesList.itemTitleColorHovered};
        }
    }
`;
export default SeriesCard;