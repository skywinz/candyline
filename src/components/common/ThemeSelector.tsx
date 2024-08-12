'use client';

import { BiSolidSun } from 'react-icons/bi';
import { RiMoonClearFill } from 'react-icons/ri';
import {DarkThemes, LightThemes} from '@/styles/themes';
import useThemeStatus from '@/stores/theme';

const ThemeSelector = ({extendedStyle}: {extendedStyle: object}) => {
    const {type, update: updateTheme} = useThemeStatus();

    const Icon = type === 'light' ? BiSolidSun : RiMoonClearFill;
    const color = type === 'light' ? LightThemes.global.themeButton.iconColor : DarkThemes.global.themeButton.iconColor;
    const nextTheme = type === 'light' ? 'dark' : 'light';
    const changeThemeHandler = () => updateTheme(nextTheme);

    return (
        <Icon
            size={32}
            style={{
                ...extendedStyle,
                cursor: 'pointer',
            }}
            color={color}
            onClick={changeThemeHandler}
        />
    );
}


export default ThemeSelector;