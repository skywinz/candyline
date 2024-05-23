'use client';

import styled from 'styled-components';
import Image from 'next/image';

interface PostTitleImageParams {
    image: string;
}


const PostTitleImage = (params: PostTitleImageParams) => {
    const { image } = params;
    return (
        <Layout>
            <Image
                src={image}
                alt="title image"
                width="0" height="0"
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto"
                }}
            />
        </Layout>
    );
}

export default PostTitleImage;


const Layout = styled.div`
    width: 100%;
`