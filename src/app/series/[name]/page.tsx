import {getSeries} from '@/apis/internal/series';
import {getInternalAPIHost} from '@/apis/internal';
import {redirect} from 'next/navigation';
import SeriesDetailContainer from '@/components/series/detail/SeriesDetailContainer';
import PostListAboutSeriesContainer from '@/components/series/detail/PostListAboutSeriesContainer';

interface SeriesDetailPageArgs {
    name: string;
}

const SeriesDetailPage = async ({params}: {params: SeriesDetailPageArgs}) => {
    const { name } = params;
    const host = getInternalAPIHost();
    const series = await getSeries(host, name, 'no-cache');

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
