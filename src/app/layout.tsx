'use client';

import React, {useEffect, useState} from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import {GlobalStyle} from '@/styles/globals';
import styled, {ThemeProvider} from 'styled-components';
import useTheme from '@/hooks/useTheme';
import {RecoilRoot} from 'recoil';
import ThemeSelector from '@/components/common/ThemeSelector';
import {LENGTH_FHD, LENGTH_MOBILE, NAVBAR_PADDING} from '@/styles/constants';


const App = ({ children }: {children: React.ReactNode}) => {
    const { themeStyle } = useTheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <div>
                <h1>loading</h1>
            </div>
        );
    }
    return (
        <ThemeProvider theme={themeStyle}>
            <>
                <GlobalStyle />
                <Navbar />
                <div className='default-layout'>
                    {children}
                </div>
                <Footer />
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
            <App>{children}</App>
        </RecoilRoot>
        </body>
        </html>
    )
};
