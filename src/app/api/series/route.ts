import {NextResponse} from 'next/server';
import {SeriesService} from '@/server/services/series';


export const GET = async (req: Request) => {
    const service = await SeriesService.getInstance();
    const list = await service.getList();
    return NextResponse.json({series: list});
}
