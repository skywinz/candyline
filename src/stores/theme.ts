import {atom} from 'recoil';
import {DarkThemes, LightThemes} from '@/styles/themes';

const themeState = atom({
    key: 'theme',
    default: LightThemes,
    effects: [
        ({setSelf, onSet}) => {
            let themeValue: string = 'light';

            if (typeof window !== 'undefined') {
                let _themeValue: string | null = localStorage.getItem('theme');
                if (_themeValue) {
                    themeValue = _themeValue;
                }
            }

            if (themeValue === 'dark') {
                setSelf(DarkThemes);
            } else {
                setSelf(LightThemes);
            }

            onSet((newValue, _, __) => {
                if (typeof window !== 'undefined') {
                    if (newValue === DarkThemes) {
                        localStorage.setItem('theme', 'dark');
                    } else {
                        localStorage.setItem('theme', 'light');
                    }
                }
            });
        }
    ]
});

export default themeState;