import {useRecoilState} from 'recoil';
import themeState from '@/stores/theme';
import {DarkThemes, LightThemes} from '@/styles/themes';


const useTheme = () => {
    const [theme, setRawTheme] = useRecoilState(themeState);

    return {
        themeStyle: theme,
        theme: theme === LightThemes ? 'light' : 'dark',
        setTheme: (themeType: string) => {
            if (themeType === 'light') {
                setRawTheme(LightThemes);
            } else if(themeType === 'dark') {
                setRawTheme(DarkThemes);
            } else {
                setRawTheme(LightThemes);
            }
        }
    }

    // return {theme, setTheme};
}

export default useTheme;