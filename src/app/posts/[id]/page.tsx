
import {redirect} from 'next/navigation';
import PostContentContainer from '@/components/post/detail/PostContentContainer';
import PostTitleContainer from '@/components/post/detail/PostTitleContainer';
import TagList from '@/components/common/TagList';
import {getPostDetail} from '@/apis/internal/post';
import {CacheForComponentType} from '@/types/api';
import {getInternalAPIHost} from '@/apis/internal';


const PostDetailPage = async ({params, _}) => {
    const id = params.id;
    const {data, statusCode} = await getPostDetail(getInternalAPIHost(), id, CacheForComponentType.SERVER);

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
