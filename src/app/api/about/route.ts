import {NextResponse} from 'next/server';
import AboutService from '@/server/services/about';

export const GET = async (_: Request) => {
    return NextResponse.json({
        content: AboutService.getAboutContents(),
    });
}
