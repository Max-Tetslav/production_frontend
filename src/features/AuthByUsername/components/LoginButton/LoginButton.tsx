import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/components/Button';

interface ILoginButtonProps {
    className?: string;
    onClick?: VoidFunction;
}

const LoginButton: FC<ILoginButtonProps> = (props) => {
    const { t } = useTranslation();

    return (
        <Button {...props} variant={ButtonVariants.OUTLINE}>
            {t('SignIn')}
        </Button>
    );
};

export default LoginButton;
