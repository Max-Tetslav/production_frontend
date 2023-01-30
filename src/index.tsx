import { render } from "react-dom";
import { Counter } from "./components/Counter";
import { someFunc } from "./test";

someFunc(1);

render(
  <div>
    <Counter />
  </div>,
  document.getElementById("root")
);
