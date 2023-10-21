'use client';

import {marked} from 'marked';
import React, {useEffect} from 'react';
import {BaseLine} from '@/components/common/Lines';
import styled from 'styled-components';

interface PostContentContainerParams {
    content: string;
}

const PostContentContainer = (params: PostContentContainerParams) => {
    const htmlContent = marked(params.content);

    useEffect(() => {
         MathJax.Hub.Queue(['Typeset', MathJax.Hub, document.querySelector('.mathjax')]);
    }, []);


    return (
        <Layout>
            <div className='mathjax' dangerouslySetInnerHTML={{__html: htmlContent}} />
            <BaseLine />
        </Layout>
    );
}

const Layout = styled.div`
  .MJXc-display {
      margin: 1em 0;
      padding: 0;
      display: inline;
  }
`;

export default PostContentContainer;