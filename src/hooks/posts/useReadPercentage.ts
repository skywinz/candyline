import {useEffect, useState} from 'react';

const useReadPercentage = () => {
    const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
    const [currentHeight, setCurrentHeight] = useState<number | undefined>(undefined);
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

    useEffect(() => {
        const scrollHandler = () => {
            const newMaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const newCurrentHeight = document.documentElement.scrollTop;

            if (!maxHeight) {
                if (newMaxHeight) {
                    setMaxHeight(newMaxHeight);
                }
            } else {
                const newBrowserWidth = window.innerWidth;
                if (browserWidth != newBrowserWidth) {
                    // 브라우저 너비가 바뀔 경우 퍼센티지 재설정
                    setBrowserWidth(newBrowserWidth);
                    setMaxHeight(newMaxHeight);
                }
                if (maxHeight && newCurrentHeight <= maxHeight - 1) {
                    setCurrentHeight(newCurrentHeight);
                }
            }
        }

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [maxHeight, currentHeight, browserWidth]);

    return {
        percentage: !maxHeight || !currentHeight ? 0 : Math.round((currentHeight / maxHeight) * 10) * 10
    }
}

export default useReadPercentage;