import {BlogPostService} from '@/server/services/post';
import {NextResponse} from 'next/server';
import {Request} from 'next/dist/compiled/@edge-runtime/primitives';
import {PostDetailRequest} from '@/types/post';

export const GET = async (req: Request, { params }: { params: PostDetailRequest })  => {
    const { id } = params;
    const service = await BlogPostService.getInstance();
    const post = await service.getDetail(id);
    if (post === null) {
        return NextResponse.json({error: 'Post Not Found'}, {status: 404});
    } else {
        return NextResponse.json(post);
    }
}
