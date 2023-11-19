import {useEffect, useState} from 'react';
import {LENGTH_DESKTOP, LENGTH_MOBILE, LENGTH_TABLET} from '@/styles/constants';

const useDefaultPadding = () => {
    const [paddingValue, setPaddingValue] = useState({
        status: 0,
        width: 0,
        leftRight: 0,
    });
    const paddingTopBottomValue = 30;


    const updatePadding = () => {
        let browserWidth;
        let browserStatus;

        browserWidth = window.innerWidth
        let percentage;
        if (browserWidth > LENGTH_TABLET ) {
            percentage = 0.2;
            browserStatus = LENGTH_DESKTOP;
        } else if (browserWidth > LENGTH_MOBILE) {
            percentage = 0.1;
            browserStatus = LENGTH_TABLET;
        } else {
            percentage = 0.06;
            browserStatus = LENGTH_MOBILE;
        }

        const newPaddingLeftRightValue = Math.floor(browserWidth * percentage);
        setPaddingValue({
            status: browserStatus,
            width: browserWidth,
            leftRight: newPaddingLeftRightValue,
        });
    }

    useEffect(() => {
        updatePadding();
        window.addEventListener('resize', updatePadding);
        return () => {
            window.removeEventListener('resize', updatePadding);
        }
    }, []);

    return {
        browserStatus: paddingValue.status,
        browserWidth: paddingValue.width,
        defaultPaddingLeftRightValue: paddingValue.leftRight,
        paddingTopBottomValue: paddingTopBottomValue,
        defualtPaddingValue: `${paddingTopBottomValue}px ${paddingValue.leftRight}px ${paddingTopBottomValue}px ${paddingValue.leftRight}px`,
    }
}

export default useDefaultPadding;