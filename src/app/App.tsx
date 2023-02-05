import { Link } from "react-router-dom";
import "./styles/index.scss";

import { AppRouter } from "./router";
import useTheme from "shared/lib/hooks/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to="/">TO MAIN PAGE</Link>
      <Link to="/about">TO ABOUT PAGE</Link>
      <AppRouter />
    </div>
  );
};

export default App;
