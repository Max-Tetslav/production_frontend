import { useState } from "react";
import cls from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button
        className={cls.button}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className={cls.button}
        onClick={() => setCounter((prev) => prev - 1)}
      >
        -
      </button>
    </div>
  );
};
