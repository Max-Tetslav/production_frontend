import {
    FC, useState, useCallback, useMemo,
} from 'react';

import { DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY } from 'shared/lib/constants/named';
import { ThemeContext } from 'shared/lib/contexts/ThemeContext';
import { Themes } from 'shared/lib/constants/enums';

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Themes>(DEFAULT_THEME);

    document.body.className = theme;

    const toggleTheme = useCallback(() => {
        setTheme((theme) => {
            const newTheme = theme === Themes.DARK ? Themes.NORMAL : Themes.DARK;

            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

            return newTheme;
        });
    }, []);

    return (
        <ThemeContext.Provider
            value={useMemo(
                () => ({
                    theme,
                    toggleTheme,
                }),
                [theme, toggleTheme],
            )}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
