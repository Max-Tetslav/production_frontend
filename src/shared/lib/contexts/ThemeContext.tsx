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

