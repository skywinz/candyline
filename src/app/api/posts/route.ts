import {Request} from 'next/dist/compiled/@edge-runtime/primitives';
import {NextResponse} from 'next/server';
import {BlogPostService} from '@/backend/services/post';
import {PostListResponse} from '@/types/post';

export const GET = async (req: Request): Promise<NextResponse<PostListResponse>> => {
    const queryParams = new URL(req.url).searchParams;
    const startIndex = queryParams.get('offset') | 0 ?? 0;
    const pageSize = queryParams.get('size') | 0 ?? 10;

    const service = await BlogPostService.getInstance();
    const {posts, nextIndex} = service.getList(startIndex, pageSize);
    const count = posts.length;

    return NextResponse.json({
        posts, count, nextIndex,
    });
}