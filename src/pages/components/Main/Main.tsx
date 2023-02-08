import React, { FC } from "react";

import user from "shared/assets/user.png";
import cls from "./Main.module.scss";

const Main: FC = () => {
  return (
    <div className={cls.container}>
      <p>MAIN PAGE</p>
      <img src={user}></img>
    </div>
  );
};

export default Main;
