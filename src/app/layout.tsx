'use client';

import React, {useEffect, useState} from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import {GlobalStyle} from '@/styles/globals';
import {ThemeProvider} from 'styled-components';
import {ClipLoader} from 'react-spinners';
import useDefaultPadding from '@/hooks/useDefaultPadding';
import {getSocials} from '@/apis/internal/social';
import useSocialStatus from '@/stores/social';
import useThemeStatus from '@/stores/theme';


const App = ({ children }: {children: React.ReactNode}) => {
    const { styles: themeStyle } = useThemeStatus();
    const [isClient, setIsClient] = useState(false);
    const {defualtPaddingValue} = useDefaultPadding();
    const { isExpired: isSocialExpired, update: updateSocialData } = useSocialStatus();

    useEffect(() => {
        (async () => {
            if (isSocialExpired()) {
                const socials = await getSocials() || [];
                updateSocialData(socials);
            } else {
            }
            setIsClient(true);
        })();
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
        <App>{children}</App>
        </body>
        </html>
    )
};
