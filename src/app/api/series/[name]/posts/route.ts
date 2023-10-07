import {SeriesService} from '@/server/services/series';
import {NextResponse} from 'next/server';
import {SeriesPostListRequest} from '@/types/series';


export const GET = async (req: Request, { params }: {params: SeriesPostListRequest}) => {
    const { name } = params;
    const queryParams = new URL(req.url).searchParams;
    const startIndex = (queryParams.get('offset') | 0) ?? 0;
    const pageSize = (queryParams.get('size') | 0) ?? 50;

    const service = await SeriesService.getInstance();
    const posts = service.getPostsFromSeries(name, startIndex, pageSize);

    if (posts === null) {
        return NextResponse.json({error: 'Series Not Found'}, {status: 404});
    } else {
        return NextResponse.json({...posts});
    }
}