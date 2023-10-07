import {Request} from 'next/dist/compiled/@edge-runtime/primitives';
import {NextResponse} from 'next/server';
import {BlogPostService} from '@/backend/services/post';
import {PostFilter, PostListResponse} from '@/types/post';

export const GET = async (req: Request): Promise<NextResponse<PostListResponse>> => {
    const queryParams = new URL(req.url).searchParams;
    const startIndex = queryParams.get('offset') | 0 ?? 0;
    const pageSize = queryParams.get('size') | 0 ?? 10;

    const filter: PostFilter = {}
    queryParams.forEach((value, name) => {
        if (name !== 'offset' && name !== 'size') {
            filter[name] = value;
        }
    });

    const service = await BlogPostService.getInstance();
    const {posts, nextIndex} = service.getList(startIndex, pageSize, filter);
    const count = posts.length;

    return NextResponse.json({
        posts, count, nextIndex,
    });
}