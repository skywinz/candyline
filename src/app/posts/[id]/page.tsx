import { MDXRemote } from 'next-mdx-remote/rsc';
import { redirect } from 'next/navigation';
import {getPostDetail} from '@/apis/internal/post';
import {CacheForComponentType} from '@/apis/internal';


const PostDetailPage = async ({params, _}) => {
    const id = params.id;
    const {data, statusCode} = await getPostDetail(id, CacheForComponentType.SERVER);

    if (statusCode === 404) {
        redirect('/404');
    } else if(statusCode !== 200) {
        redirect('/unknown-error');
    }


    if(!data) { return null; }
    return (
        <div>
            <h1>안녕하세요</h1>
            <MDXRemote source={data.content} />
        </div>
    );
}

export default PostDetailPage;