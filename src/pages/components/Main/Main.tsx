import React, { FC } from "react";

import { ThemeToggle } from "features/ThemeToggle";
import user from "shared/assets/user.png";
import cls from "./Main.module.scss";

const Main: FC = () => {
  return (
    <div className={cls.container}>
      <p>MAIN PAGE</p>
      <ThemeToggle />
      <img src={user}></img>
    </div>
  );
};

export default Main;
