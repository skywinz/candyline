'use client';

import {SeriesData} from '@/types/series';
import React from 'react';
import styled from 'styled-components';

const SeriesDetailContainer = (series: SeriesData) => {

    return (
        <Layout>
            <h2>Series: {series.name}</h2>
            <p>{series.summary}</p>
            <hr />
        </Layout>
    );
}

const Layout = styled.div`
    text-align: center;
    margin-bottom: 20px;
  
    h2 {
      font-weight: 400;
      font-size: 2.2em;
    }
    hr {
      margin-top: 40px;
    }
`;

export default SeriesDetailContainer