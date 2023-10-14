'use client';

import React from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import {GlobalStyle} from '@/styles/globals';
import styled, {ThemeProvider} from 'styled-components';
import useTheme from '@/hooks/useTheme';
import {RecoilRoot} from 'recoil';
import ThemeSelector from '@/components/common/ThemeSelector';
import {LENGTH_FHD, LENGTH_MOBILE, NAVBAR_PADDING} from '@/styles/constants';


const App = ({ children }) => {
    const { themeStyle } = useTheme();
    return (
        <ThemeProvider theme={themeStyle} style={{position: 'relative'}}>
            <>
                <GlobalStyle />
                <Navbar />
                <div className='default-layout'>
                    {children}
                </div>
                <Footer />
                <ThemeSelectorButtonLayout>
                    <ThemeSelector />
                </ThemeSelectorButtonLayout>
            </>
        </ThemeProvider>
    );
}

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='kr'>
        <head>
            <title>SkyWINZ Devlog</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Diphylleia&family=Hahmlet:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Gothic+Coding:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet" />
            <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
        </head>
        <body>
        <RecoilRoot>
            <App children={children} />
        </RecoilRoot>
        </body>
        </html>
    )
};

const ThemeSelectorButtonLayout = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10001;
    margin: ${NAVBAR_PADDING.OVER_QHD};
    margin-top: -4px;
  
    @media (max-width: ${LENGTH_FHD}px) {
        margin: ${NAVBAR_PADDING.FHD};
        margin-top: -4px;
    }
    @media (max-width: ${LENGTH_MOBILE}px) {
        margin: ${NAVBAR_PADDING.MOBILE};
        margin-top: -4px;
    }
`;