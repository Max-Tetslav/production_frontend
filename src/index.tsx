import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App, ThemeProvider } from "app";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
