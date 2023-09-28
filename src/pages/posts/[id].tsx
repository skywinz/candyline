import axios from 'axios';
import {GetServerSideProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

import { PostDataForRendering } from '@/types/post';
import {BaseURL} from '@/constants';
import {ResponseInterface} from '@/types';


interface PostDetailPageProps extends ResponseInterface {
    data?: PostDataForRendering;
}


const PostDetailPage: NextPage<PostDetailPageProps> = (props) => {
    const router = useRouter();
    const { statusCode, data } = props;

    useEffect(() => {
        if (statusCode === 404) {
            router.push('/404');
        } else if(statusCode !== 200) {
            router.push('/unknown-error');
        }
    }, [router]);

    if(!data) { return null; }
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: data.content}}></div>
        </div>
    );
}


export const getServerSideProps: GetServerSideProps<PostDetailPageProps> = async (context) => {
    const { id } = context.query;
    const props = await axios.get(`${BaseURL}/api/posts/${id}`)
        .then(res => {
            return {
                data: res.data,
                statusCode: 200,
            }
        }).catch((err) => {
            return {
                statusCode: err.response.status
            };
        });
    return { props };
}

export default PostDetailPage;