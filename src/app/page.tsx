import React from 'react';
import {getAbout} from '@/apis/internal/about';
import {getInternalAPIHost} from '@/apis/internal';
import {marked} from 'marked';

const Page = async () => {
    const content = await getAbout(getInternalAPIHost(), 'no-cache');
    const htmlContent = marked(content);

    return (
        <main>
            <div dangerouslySetInnerHTML={{__html: htmlContent}} />
        </main>
    );
}
export default Page;