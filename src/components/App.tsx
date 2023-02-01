import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import "./index.scss";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">TO MAIN PAGE</Link>
      <Link to="/about">TO ABOUT PAGE</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};
