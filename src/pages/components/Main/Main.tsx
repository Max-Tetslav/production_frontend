import React, { FC } from "react";

import { cn } from "shared/lib/helpers/classnames";
import useTheme from "shared/lib/hooks/useTheme";
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
          cls.againg
        )}
        onClick={toggleTheme}
      >
        Change THEME
      </button>
    </div>
  );
};

export default Main;
