import {getInternalAPIHost} from '@/apis/internal';
import {getSeriesList} from '@/apis/internal/series';
import {CacheForComponentType} from '@/types/api';
import SeriesCard from '@/components/series/list/SeriesCard';
import SeriesCardGridLayout from '@/components/series/list/SeriesCardGridLayout';

const SeriesListPage = async () => {
    const host = getInternalAPIHost();
    const seriesList = await getSeriesList(host, CacheForComponentType.SERVER);

    const SeriesComponents = seriesList.map((series, index) => <SeriesCard key={index} name={series.name} summary={series.summary} />);

    return (
        <>
            <h1>Series List Page</h1>
            <div>
                <SeriesCardGridLayout seriesList={seriesList} />
            </div>
        </>
    );
}
export default SeriesListPage;
