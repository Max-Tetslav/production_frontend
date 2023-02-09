import { LangSwitcher } from "features/LangSwitcher";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/components/Button";
import { cn } from "shared/lib/helpers/classnames";

import cls from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

const Sidebar: FC<ISidebarProps> = (props) => {
  const { className } = props;

  const [isCollapsed, setIsCollabled] = useState(false);

  const onToggle = () => {
    setIsCollabled((value) => !value);
  };

  const { t } = useTranslation();

  return (
    <div className={cn(cls.container, { [cls.collapsed]: isCollapsed })}>
      <Button onClick={onToggle}>
        {t(isCollapsed ? "collapse" : "opened")}
      </Button>

      <div className={cls.switchersBox}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
