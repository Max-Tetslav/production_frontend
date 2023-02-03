import React, { FC } from "react";
import useTheme from "../../shared/hooks/useTheme";
import { cn } from "../../shared/utils/classnames";
import cls from "./Main.module.scss";

const Main: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={cls.container}>
      <p>MAIN PAGE</p>
      <button
        className={cn(
          cls.btn,
          cls.files,
          { [cls.redBg]: true, [cls.bigFont]: false },
          cls.againg,
          undefined,
          null
        )}
        onClick={toggleTheme}
      >
        Change THEME
      </button>
    </div>
  );
};

export default Main;
