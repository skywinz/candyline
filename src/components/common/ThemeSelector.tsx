'use client';

import useTheme from '@/hooks/useTheme';
import { BiSolidSun } from 'react-icons/bi';
import { RiMoonClearFill } from 'react-icons/ri';
import {DarkThemes, LightThemes} from '@/styles/themes';
import styled from 'styled-components';

const ThemeSelector = () => {
    const {theme, setTheme} = useTheme();

    const Icon = theme === 'light' ? BiSolidSun : RiMoonClearFill;
    const color = theme === 'light' ? LightThemes.global.themeButton.iconColor : DarkThemes.global.themeButton.iconColor;
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const changeThemeHandler = () => setTheme(nextTheme);



    return (
        <Button>
            <Icon
                size={32}
                style={{
                    cursor: "pointer",
                }}
                color={color}
                onClick={changeThemeHandler}
            />
        </Button>
    );
}


const Button = styled.button`
    width: 35px;
    height: 32px;
    border-radius: 10%;
    margin-top: 17px;
    background-color: transparent;
    
    transition: background-color 0.5s ease;
  
    border: 0;
`;

export default ThemeSelector;