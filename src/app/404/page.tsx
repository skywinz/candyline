'use client';

import React from 'react';
import Image from 'next/image';
import ErrorPic from '/public/images/404.png';

const NotFound404: React.FC = () => {
    return (
        <>
            <Image src={ErrorPic} alt='404Error' layout="responsive" />
        </>
    );
}
export default NotFound404;