import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/components/Button";

import cls from "./LangSwitcher.module.scss";

interface ILangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button className={cls.container} onClick={toggleLang}>
      {t("translate")}
    </Button>
  );
};

export default LangSwitcher;