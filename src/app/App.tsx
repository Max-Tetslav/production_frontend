import "./styles/index.scss";

import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import useTheme from "shared/lib/hooks/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
