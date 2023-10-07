import {PostListBySeriesResponse, SeriesData} from '@/types/series';
import {postListSizeBySeriesPage} from '@/constants';
import {ErrorResponse} from '@/types';

export const getSeriesList = async (host: string, componentType): Promise<SeriesData[]> => {
    const res = await fetch(`${host}/api/series`, {cache: componentType});
    if (res.ok) {
        const data = await res.json();
        return data.series;
    } else {
        return [];
    }
}


export const getSeries = async (host: string, name: string, componentType): Promise<SeriesData | null>  => {
    const res = await fetch(`${host}/api/series/${name}`, {cache: componentType});
    if (res.ok) {
        const data = await res.json();
        return {...data};
    } else {
        return null;
    }
}