import {redirect} from 'next/navigation';
import PostContentContainer from '@/components/post/detail/PostContentContainer';
import PostTitleContainer from '@/components/post/detail/PostTitleContainer';
import TagList from '@/components/common/TagList';
import {getPostDetail} from '@/apis/internal/post';
import {getInternalAPIHost} from '@/apis/internal';

interface PostDetailPageArgs {
    id: string;
}


const PostDetailPage = async ({ params }: {params: PostDetailPageArgs}) => {
    const { id } = params;
    const {data, statusCode} = await getPostDetail(getInternalAPIHost(), id, 'no-cache');

    if (statusCode === 404) {
        redirect('/404');
    } else if(statusCode !== 200) {
        redirect('/unknown-error');
    }

    return (
        <>
            <PostTitleContainer title={data.title} date={new Date(data.date)} series={data.series} />
            <PostContentContainer content={data.content} />
            <TagList tags={data.tags} />
        </>
    );
}

export default PostDetailPage;
