import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import cls from "./About.module.scss";

const About: FC = () => {
  const { t } = useTranslation("about");

  return <div className={cls.container}>{t("about-page")}</div>;
};

export default About;
