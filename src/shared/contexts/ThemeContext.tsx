import { createContext, FC, useCallback, useState } from "react";

export enum Themes {
  NORMAL = "normal",
  DARK = "dark",
}

export interface IThemeContextProps {
  theme?: Themes;
  toggleTheme?: VoidFunction;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const DEFAULT_THEME =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes | undefined) ||
  Themes.NORMAL;

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
