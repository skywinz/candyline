'use client';

import React from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import {GlobalStyle} from '@/styles/globals';
import {ThemeProvider} from 'styled-components';
import {LightThemes} from '@/styles/themes';

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
                <ThemeProvider theme={LightThemes}>
                    <>
                        <GlobalStyle />
                        <Navbar />
                        <div className='default-layout'>
                            {children}
                        </div>
                        <Footer />
                    </>
                </ThemeProvider>
            </body>
        </html>
    )
};