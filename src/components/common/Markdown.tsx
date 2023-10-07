'use client';

import {MDXRemote} from 'next-mdx-remote/rsc';

const Markdown = ({content}: {content: string}) => {
    return (
            <>
                <MDXRemote source={content} />
            </>
    );
}

export default Markdown;