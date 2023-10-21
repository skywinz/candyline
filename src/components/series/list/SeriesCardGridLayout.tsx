'use client';

import {SeriesData} from '@/types/series';
import styled from 'styled-components';
import SeriesCard from '@/components/series/list/SeriesCard';
import {LENGTH_FHD, LENGTH_MOBILE} from '@/styles/constants';

const SeriesCardGridLayout = ({seriesList}: {seriesList: SeriesData[]}) => {
    const SeriesCardComponents = seriesList.map((series, idx) =>
        <SeriesCard
            key={idx}
            name={series.name}
            summary={series.summary}
            image={series.image}
        />);

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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  
    @media (max-width: ${LENGTH_MOBILE}px) {
      grid-template-columns: repeat(1, 1fr);
    }
`;

export default SeriesCardGridLayout;

