import {Request} from 'next/dist/compiled/@edge-runtime/primitives';
import {NextResponse} from 'next/server';
import {BlogPostService} from '@/server/services/post';
import {PostFilter} from '@/types/post';

export const GET = async (req: Request) => {
    const queryParams = new URL(req.url).searchParams;
    const startIndex = parseInt(queryParams.get('offset') ?? '99999999');
    const pageSize = parseInt(queryParams.get('size') ?? '10');

    const filter: PostFilter = {}
    queryParams.forEach((value: string, key: string) => {
        if (key === 'seriesName') {
            filter.seriesName = value;
        }
        if (key === 'tags') {
            filter.tags = value.split(',');
        }
        if (key == 'word') {
            filter.word = value;
        }
    });

    const service = await BlogPostService.getInstance();
    const _res = await service.getList(startIndex, pageSize, filter);
    if (!_res) {
        // 절대 나올수가 없는 에러이나 eslint에서 계속 지랄해서 분기처리
        return NextResponse.json({error: 'server error'}, {status: 500});
    }

    const {posts, nextIndex} = _res;
    const count = posts.length;
    return NextResponse.json({
        posts, count, nextIndex,
    });
}