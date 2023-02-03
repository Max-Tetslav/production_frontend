import { Suspense, useCallback, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import "./styles/index.scss";
import { ThemeContext } from "./shared/contexts/ThemeContext";
import useTheme from "./shared/hooks/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app  ${theme}`}>
      <button onClick={toggleTheme}>Change THEME</button>
      <Link to="/">TO MAIN PAGE</Link>
      <Link to="/about">TO ABOUT PAGE</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};
