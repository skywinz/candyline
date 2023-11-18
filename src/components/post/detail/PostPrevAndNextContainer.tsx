'use client';

import styled from 'styled-components';
import {PrevNextPostItem} from '@/types/post';
import PostMovingButton from '@/components/post/detail/PostMovingButton';
import {PAGE_MOVE_TO_LEFT, PAGE_MOVE_TO_RIGHT} from '@/constants/client';
import useDefaultPadding from '@/hooks/useDefaultPadding';
import {LENGTH_DESKTOP, LENGTH_MOBILE, LENGTH_TABLET} from '@/styles/constants';

interface PostPrevAndNextContainerParams {
    prev: PrevNextPostItem | null;
    next: PrevNextPostItem | null;
}

const calculateContainerWidth = (
    prev: PrevNextPostItem | null,
    next: PrevNextPostItem | null,
    browserStatus: number
): string  => {
    if (!(prev && next)) {
        return '100%';
    } else {
        switch (browserStatus) {
            case LENGTH_DESKTOP:
                return '400px';
            case LENGTH_TABLET:
                return '300px';
            case LENGTH_MOBILE:
                return 'auto';
            default:
                return '0';
        }
    }
}

const PostPrevAndNextContainer = (params: PostPrevAndNextContainerParams) => {
    const { prev, next } = params;
    const { browserStatus } = useDefaultPadding();
    const width = calculateContainerWidth(prev, next, browserStatus);

    return (
        <Layout>
            {prev && <PostMovingButton direction={PAGE_MOVE_TO_LEFT} item={prev} width={width} />}
            {next && <PostMovingButton direction={PAGE_MOVE_TO_RIGHT} item={next} width={width} />}
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export default PostPrevAndNextContainer;