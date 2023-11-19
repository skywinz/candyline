import {SeriesService} from '@/server/services/series';
import {NextResponse} from 'next/server';
import {SeriesDetailRequest} from '@/types/series';

export const GET = async (req: Request, { params }: {params: SeriesDetailRequest}) => {
    const { name } = params;
    const service = await SeriesService.getInstance();
    const series = await service.getSeries(name);
    if (series === null) {
        return NextResponse.json({error: "Series Not Found"}, {status: 404});
    } else {
        return NextResponse.json({...series});
    }
}
