import { createContext } from "react";
import { Themes } from "../constants/enums";

export interface IThemeContextProps {
  theme?: Themes;
  toggleTheme?: VoidFunction;
}

export const ThemeContext = createContext<IThemeContextProps>({});
