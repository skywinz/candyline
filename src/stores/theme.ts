import {DarkThemes, LightThemes} from '@/styles/themes';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface ThemeStatus {
    type: string;
    styles: any;
    update: (type: string) => void;
}

const useThemeStatus = create(
    persist<ThemeStatus>(
        (set, get) => ({
            type: 'light',
            styles: LightThemes,
            update: (type: string) => set((state) => ({
                ...state,
                type: type === 'dark' ? 'dark' : 'light',
                styles: type === 'dark' ? DarkThemes : LightThemes,
            }))
        }),
        {
            name: 'themeStatus'
        }
    )
);

export default useThemeStatus;