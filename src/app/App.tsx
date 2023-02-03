import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { About, Main } from "pages";
import useTheme from "shared/lib/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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

export default App;
