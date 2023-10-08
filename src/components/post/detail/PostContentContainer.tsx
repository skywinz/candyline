'use client';

import {marked} from 'marked';
import React from 'react';
import {BaseLine} from '@/components/common/Lines';

interface PostContentContainerParams {
    content: string;
}

const PostContentContainer = (params: PostContentContainerParams) => {
    const htmlContent = marked(params.content);
    return (
        <>
            <div dangerouslySetInnerHTML={{__html: htmlContent}} />
            <BaseLine />
        </>
    );
}

export default PostContentContainer;