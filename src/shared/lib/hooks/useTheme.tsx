import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { Themes } from '../constants/enums';

export interface IUseThemeResult {
  theme: Themes;
  toggleTheme: VoidFunction;
}

const useTheme = (): IUseThemeResult => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return {
        theme,
        toggleTheme,
    };
};

export default useTheme;
