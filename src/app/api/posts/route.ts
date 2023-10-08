import {Request} from 'next/dist/compiled/@edge-runtime/primitives';
import {NextResponse} from 'next/server';
import {BlogPostService} from '@/server/services/post';
import {PostFilter} from '@/types/post';

export const GET = async (req: Request) => {
    const queryParams = new URL(req.url).searchParams;
    const startIndex = parseInt(queryParams.get('offset') ?? '0');
    const pageSize = parseInt(queryParams.get('size') ?? '10');

    let filter: PostFilter = {}
    queryParams.forEach((value, name) => {
        if (name !== 'offset' && name !== 'size') {
            filter = Object.assign(filter, {name: value});
        }
    });

    const service = await BlogPostService.getInstance();
    const _res = service.getList(startIndex, pageSize, filter);
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