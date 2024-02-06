import {redirect} from 'next/navigation';
import PostContentContainer from '@/components/post/detail/PostContentContainer';
import PostTitleContainer from '@/components/post/detail/PostTitleContainer';
import {getPostDetail} from '@/apis/internal/post';
import {getInternalAPIHost} from '@/apis/internal';
import Utterances from '@/components/common/Utterances';
import PostPrevAndNextContainer from '@/components/post/detail/PostPrevAndNextContainer';
import NavbarPostReadProgress from '@/components/common/NavbarPostReadProgress';

interface PostDetailPageArgs {
    id: string;
}


const PostDetailPage = async ({ params }: {params: PostDetailPageArgs}) => {
    const { id } = params;
    const {data, statusCode} = await getPostDetail(getInternalAPIHost(), id, 'no-cache');

    if (statusCode === 404) {
        redirect('/not-found');
    } else if(statusCode !== 200) {
        redirect('/unknown-error');
    }

    return (
        <>
            <div style={{
                position: "fixed",
                zIndex: "10000",
                marginTop: "74px",
                top: "0",
                left: "0",
                right: "0",
            }}>
                <NavbarPostReadProgress />
            </div>
            <PostTitleContainer title={data.title} date={new Date(data.date)} series={data.series} tags={data.tags} />
            <PostContentContainer content={data.content} />
            <PostPrevAndNextContainer prev={data.prev} next={data.next} />
            <Utterances />
        </>
    );
}

export default PostDetailPage;
