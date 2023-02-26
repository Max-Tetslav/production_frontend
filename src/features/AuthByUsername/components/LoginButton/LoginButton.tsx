import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants, IButtonProps } from 'shared/components/Button';

export enum LoginButtonStatuses {
    SIGN_IN = 'sign-in',
    SIGN_OUT = 'sign-out'
}

export interface ILoginButtonProps extends IButtonProps {
    status: LoginButtonStatuses;
}

const LoginButton: FC<ILoginButtonProps> = (props) => {
    const { variant, status } = props;
    const { t } = useTranslation();

    return (
        <Button variant={variant || ButtonVariants.OUTLINE} {...props}>
            {t(status)}
        </Button>
    );
};

export default LoginButton;
