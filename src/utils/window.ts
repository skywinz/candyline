export const isWindowBottom = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    return scrollY + windowHeight === totalHeight;
}