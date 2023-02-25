import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button';
import { cn } from 'shared/lib/helpers/classnames';

interface ILangSwitcherProps {
    className?: string;
    isShortText?: boolean;
}

const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
    const { className, isShortText } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru';

        i18n.changeLanguage(newLang);
    };

    return (
        <Button className={cn(className)} onClick={toggleLang}>
            {t(isShortText ? 'short-translate' : 'translate')}
        </Button>
    );
};

export default LangSwitcher;
