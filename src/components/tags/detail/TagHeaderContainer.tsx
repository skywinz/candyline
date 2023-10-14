'use client';

import styled from 'styled-components';

interface TagHeaderContainerArgs {
    tagName: string;
}

const TagHeaderContainer = ({ tagName }: TagHeaderContainerArgs) => {
    return (
        <Layout>
            <h1 className='title'>TAG</h1>
            <h1 className='name'>{tagName}</h1>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    margin: 20px 20px 20px 20px;
    width: 100%;
    justify-content: center;
  
    h1 {
        font-weight: 400;
        padding: 5px 15px 5px 15px;
        border: none;
    }
  
    .title {
        background-color: ${(props) => props.theme.main.tagDetail.headerTitleBackgroundColor};
        color: ${(props) => props.theme.main.tagDetail.headerTitleFontColor};
        
        transition: background-color 0.5s ease, color 0.5s ease;
    }
    .name {
        color: ${(props) => props.theme.main.tagDetail.headerTagnameFontColor};
        
        transition: color 0.5s ease;
    }
`;

export default TagHeaderContainer;