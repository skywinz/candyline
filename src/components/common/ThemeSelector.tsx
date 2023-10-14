'use client';

import useTheme from '@/hooks/useTheme';
import { BiSolidSun } from 'react-icons/bi';
import { RiMoonClearFill } from 'react-icons/ri';
import {DarkThemes, LightThemes} from '@/styles/themes';
import styled from 'styled-components';

const ThemeSelector = ({extendedStyle}: {extendedStyle: object}) => {
    const {theme, setTheme} = useTheme();

    const Icon = theme === 'light' ? BiSolidSun : RiMoonClearFill;
    const color = theme === 'light' ? LightThemes.global.themeButton.iconColor : DarkThemes.global.themeButton.iconColor;
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const changeThemeHandler = () => setTheme(nextTheme);

    return (
        <Icon
            size={32}
            style={{
                ...extendedStyle,
                cursor: "pointer",
            }}
            color={color}
            onClick={changeThemeHandler}
        />
    );
}


export default ThemeSelector;