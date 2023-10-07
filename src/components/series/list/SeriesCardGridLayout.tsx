'use client';

import {SeriesData} from '@/types/series';
import styled from 'styled-components';
import SeriesCard from '@/components/series/list/SeriesCard';

const SeriesCardGridLayout = ({seriesList}: {seriesList: SeriesData[]}) => {

    const SeriesCardComponents = seriesList.map((series, idx) =>
        <SeriesCard key={idx} name={series.name} summary={series.summary} />);

    return (
        <Layout>
            {SeriesCardComponents}
        </Layout>
    );
}

const Layout = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 100px;
`;

export default SeriesCardGridLayout;

