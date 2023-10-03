import {BlogPostService} from '@/backend/services/post';
import {NextResponse} from 'next/server';
import {Request} from 'next/dist/compiled/@edge-runtime/primitives';
import {GetPostDetailParams} from '@/types/api';

export const GET = async (req: Request, { params }: { params: GetPostDetailParams })  => {
    const { id } = params;
    const service = await BlogPostService.getInstance();
    const post = service.getDetail(id);
    if (post === null) {
        return NextResponse.json({error: 'Post Not Found'}, {status: 404});
    } else {
        return NextResponse.json(post);
    }
}
