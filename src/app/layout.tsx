'use client';

import React, {useEffect, useState} from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import {GlobalStyle} from '@/styles/globals';
import {ThemeProvider} from 'styled-components';
import useTheme from '@/hooks/useTheme';
import {RecoilRoot} from 'recoil';
import {ClipLoader} from 'react-spinners';
import useDefaultPadding from '@/hooks/useDefaultPadding';


const App = ({ children }: {children: React.ReactNode}) => {
    const { themeStyle } = useTheme();
    const [isClient, setIsClient] = useState(false);
    const {defualtPaddingValue} = useDefaultPadding();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <>
                <ClipLoader
                    color="black"
                    loading={true}
                    size={100}
                    aria-label="loading spinner"
                />
                <h2>Page Loading</h2>
            </>
        );
    }

    return (
        <ThemeProvider theme={themeStyle}>
            <>
                <GlobalStyle />
                <Navbar />
                <div className='default-layout' style={{padding: defualtPaddingValue}}>
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
            <script
                type="text/javascript"
                async
                src={`https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML`}
            />
        </head>
        <body>
        <RecoilRoot>
            <App>{children}</App>
        </RecoilRoot>
        </body>
        </html>
    )
};
