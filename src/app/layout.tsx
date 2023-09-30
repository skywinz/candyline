'use client';
import '../styles/globals.css';

import React from 'react';

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='kr'>
            <head>
                <title>Test</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Diphylleia&family=Hahmlet:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Gothic+Coding:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <>
                    {children}
                </>
            </body>
        </html>
    )
};