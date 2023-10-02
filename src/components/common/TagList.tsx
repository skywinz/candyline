'use client';

import React from 'react';
import styled from 'styled-components';
import Tag from '@/components/common/Tag';

interface TagListParams {
    tags: string[];
}

const TagList: React.FC = (param: TagListParams) => {

    const extendedTagStyle = {
        marginRight: '10px',
    }
    const TagListComponent = param.tags.map(
        (tag, idx) => <Tag key={idx} style={extendedTagStyle}>{tag}</Tag>
    );

    return (
        <Layout>
            {TagListComponent}
        </Layout>
    );
}

export default TagList;

const Layout = styled.div`
    display: flex;
`;