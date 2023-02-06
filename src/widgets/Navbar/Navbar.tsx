import { FC } from "react";
import { AppLink, EAppLinkThemes } from "shared/components/AppLink";
import { cn } from "shared/lib/helpers/classnames";

import cls from "./Navbar.module.scss";

interface INavbarProps {
  className?: string;
}

const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.container, className)}>
      <div className={cls.linksBox}>
        <AppLink to="/" theme={EAppLinkThemes.INVERTED}>
          TO MAIN PAGE
        </AppLink>
        <AppLink to="/about" theme={EAppLinkThemes.INVERTED}>
          TO ABOUT PAGE
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
