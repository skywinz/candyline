import {getSeries} from '@/apis/internal/series';
import {getInternalAPIHost} from '@/apis/internal';
import {CacheForComponentType} from '@/types/api';
import {redirect} from 'next/navigation';
import SeriesDetailContainer from '@/components/series/detail/SeriesDetailContainer';
import PostListAboutSeriesContainer from '@/components/series/detail/PostListAboutSeriesContainer';

const SeriesDetailPage = async ({params, _}) => {
    const name = params.name;
    const host = getInternalAPIHost();
    const series = await getSeries(host, name, CacheForComponentType.SERVER);

    if (series === null) {
        redirect('/404');
    }

    return (
        <>
            <SeriesDetailContainer name={series.name} summary={series.summary} />
            <PostListAboutSeriesContainer seriesName={name} host={host} />
        </>
    );
}

export default SeriesDetailPage;
