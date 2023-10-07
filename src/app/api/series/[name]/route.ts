import {SeriesService} from '@/backend/services/series';
import {NextResponse} from 'next/server';

export const GET = async (req: Request, { params }: {params: {name: string}}) => {
    const { name } = params;
    const service = await SeriesService.getInstance();
    const series = service.getSeries(name);
    if (series === null) {
        return NextResponse.json({error: "Series Not Found"}, {status: 404});
    } else {
        return NextResponse.json({...series});
    }
}
