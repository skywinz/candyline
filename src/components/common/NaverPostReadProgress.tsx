'use client';

import styled from 'styled-components';
import useReadPercentage from '@/hooks/posts/useReadPercentage';

const NavbarPostReadProgress = () => {
    const {percentage} = useReadPercentage();

    return (
        <Layout>
            <ProgressRead style={{width: `${percentage}%`}} />
            <ProgressUnRead style={{width: `${100 - percentage}%`}} />
        </Layout>
    );
}

const Layout = styled.div`
    width: 100%;
    height: 4px;
    display: flex;
    margin-top: -15px;
`;

const ProgressRead = styled.div`
    background-color: ${(props) => props.theme.main.postDetail.readingProgressBarBackgroundColor};
    border-radius: 20px;
  
    transition: background-color 0.4s, box-shadow 0.4s, width 0.3s ease-in-out;
`;

const ProgressUnRead = styled.div`
    background-color: transparent;
    transition: width 0.3s ease-in-out;
`;

export default NavbarPostReadProgress;