import {SeriesData} from '@/types/series';

export const getSeriesList = async (host: string, cache: RequestCache): Promise<SeriesData[]> => {
    const res = await fetch(`${host}/api/series`, { cache });
    if (res.ok) {
        const data = await res.json();
        return data.series;
    } else {
        return [];
    }
}


export const getSeries = async (host: string, name: string, cache: RequestCache): Promise<SeriesData | null>  => {
    const res = await fetch(`${host}/api/series/${name}`, { cache });
    if (res.ok) {
        const data = await res.json();
        return {...data};
    } else {
        return null;
    }
}