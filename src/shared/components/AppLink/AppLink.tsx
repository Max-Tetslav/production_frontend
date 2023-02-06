import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "../../lib/helpers/classnames";

import cls from "./AppLink.module.scss";

export enum EAppLinkThemes {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: EAppLinkThemes;
}

const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = EAppLinkThemes.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      className={cn(cls.container, className, cls[theme])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
