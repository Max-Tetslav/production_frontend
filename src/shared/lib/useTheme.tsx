import { useContext } from "react";

import { ThemeContext, Themes } from "./ThemeContext";

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
