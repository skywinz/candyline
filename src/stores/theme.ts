import {atom} from 'recoil';
import {LightThemes} from '@/styles/themes';

const themeState = atom<object>({key: 'theme', default: LightThemes});

export default themeState;