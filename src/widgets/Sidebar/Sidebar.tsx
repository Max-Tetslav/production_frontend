import { ThemeToggle } from "features/ThemeToggle";
import { FC, useState } from "react";
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

  return (
    <div className={cn(cls.container, { [cls.collapsed]: isCollapsed })}>
      <Button onClick={onToggle}>TOOGLE</Button>

      <div className={cls.switchersBox}>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
