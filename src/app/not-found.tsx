import Image from 'next/image';
import ErrorPic from '/public/images/404.png';
import React from 'react';

const NotFound = () => {
    return (
        <>
            <Image src={ErrorPic} alt='404Error' priority={true} style={{width: "100%", height: "100%"}} />
        </>
    );
}
export default NotFound;