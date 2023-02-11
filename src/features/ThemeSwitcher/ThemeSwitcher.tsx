import { FC } from 'react';
import { cn } from 'shared/lib/helpers/classnames';

import { Button } from 'shared/components/Button';
import { Themes } from 'shared/lib/constants/enums';
import ThemeIcon from 'shared/assets/icons/theme-dark.svg';
import useTheme from 'shared/lib/hooks/useTheme';
import cls from './ThemeSwitcher.module.scss';

interface IThemeToggleProps {
  className?: string;
}

const ThemeSwitcher: FC<IThemeToggleProps> = (props) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={cn(cls.container)} onClick={toggleTheme}>
            <ThemeIcon className={theme === Themes.DARK ? cls.dark : cls.normal} />
        </Button>
    );
};

export default ThemeSwitcher;
