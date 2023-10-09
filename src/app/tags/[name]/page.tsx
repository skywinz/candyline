import {getInternalAPIHost} from '@/apis/internal';
import PostListByTagContainer from '@/components/tags/detail/PostListByTagContainer';
import TagHeaderContainer from '@/components/tags/detail/TagHeaderContainer';

interface TagDetailPageArgs {
    name: string;
}

const TagDetailPage = async ({params}: {params: TagDetailPageArgs}) => {
    let { name } = params;
    name = decodeURI(name);
    const host = getInternalAPIHost();
    return (
        <>
            <TagHeaderContainer tagName={name} />
            <PostListByTagContainer tagName={name} host={host} />
        </>
    );
}

export default TagDetailPage;