import { FC, useState, useCallback } from "react";
import {
  Themes,
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "../../shared/lib/ThemeContext";

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(DEFAULT_THEME);

  const toggleTheme = useCallback(() => {
    setTheme((theme) => {
      const newTheme = theme === Themes.DARK ? Themes.NORMAL : Themes.DARK;

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;