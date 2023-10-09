import {getInternalAPIHost} from '@/apis/internal';
import {getSeriesList} from '@/apis/internal/series';
import SeriesCardGridLayout from '@/components/series/list/SeriesCardGridLayout';

const SeriesListPage = async () => {
    const host = getInternalAPIHost();
    const seriesList = await getSeriesList(host, 'no-cache');

    return (
        <>
            <h1 style={{ marginTop: '70px', marginBottom: '-60px' }}>Series</h1>
            <div>
                <SeriesCardGridLayout seriesList={seriesList} />
            </div>
        </>
    );
}
export default SeriesListPage;
