import { FC } from "react";
import { useTranslation } from "react-i18next";
import { AppLink, EAppLinkThemes } from "shared/components/AppLink";
import { cn } from "shared/lib/helpers/classnames";

import cls from "./Navbar.module.scss";

interface INavbarProps {
  className?: string;
}

const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={cn(cls.container, className)}>
      <div className={cls.linksBox}>
        <AppLink to="/" theme={EAppLinkThemes.INVERTED}>
          {t("main_link")}
        </AppLink>
        <AppLink to="/about" theme={EAppLinkThemes.INVERTED}>
          {t("about_link")}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
