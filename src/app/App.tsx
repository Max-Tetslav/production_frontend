import { Link } from "react-router-dom";
import "./styles/index.scss";

import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import useTheme from "shared/lib/hooks/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
