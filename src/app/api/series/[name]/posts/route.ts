import {SeriesService} from '@/backend/services/series';
import {NextResponse} from 'next/server';


export const GET = async (req: Request, { params }: {params: {name: string}}) => {
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