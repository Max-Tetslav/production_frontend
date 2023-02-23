import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink, EAppLinkThemes } from 'shared/components/AppLink';
import { Button, ButtonVariants } from 'shared/components/Button';
import { ButtonSizes } from 'shared/components/Button/Button';
import { LangSwitcher } from 'shared/components/LangSwitcher';
import { routesPathList } from 'app/router/config/router';
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher';
import { cn } from 'shared/lib/helpers/classnames';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';
import cls from './Sidebar.module.scss';

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
        <div
            className={cn(cls.container, { [cls.collapsed]: isCollapsed })}
            role="menu"
        >
            <div className={cls.linksBox}>
                <AppLink
                    to={routesPathList.main}
                    theme={EAppLinkThemes.INVERTED}
                    className={cls.link}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.linkText}>{t('main_link')}</span>
                </AppLink>
                <AppLink
                    to={routesPathList.about}
                    theme={EAppLinkThemes.INVERTED}
                    className={cls.link}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.linkText}>{t('about_link')}</span>
                </AppLink>
            </div>
            <Button
                aria-label="menu-toggle"
                className={cls.collapseBtn}
                size={ButtonSizes.L}
                square
                variant={ButtonVariants.BACKGROUND_INVERTED}
                onClick={onToggle}
            >
                {isCollapsed ? '>' : '<'}
            </Button>

            <div className={cls.switchersBox}>
                <ThemeSwitcher aria-label="theme-switcher" />
                <LangSwitcher
                    aria-label="lang-switcher"
                    isShortText={isCollapsed}
                />
            </div>
        </div>
    );
};

export default Sidebar;
