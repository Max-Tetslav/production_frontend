import { ChangeEvent, FC, useState } from 'react';
import { cn } from 'shared/lib/helpers/classnames';
import { BaseInput } from 'shared/components/BaseInput';
import { useTranslation } from 'react-i18next';
import { LoginButton } from '../LoginButton';

import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

const LoginForm: FC<ILoginFormProps> = (props) => {
    const { className } = props;

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const { t } = useTranslation();

    return (
        <div className={cn(cls.container, className)}>
            <div className={cls.inputContainers}>
                <BaseInput
                    label={t('enter-login')}
                    labelClassName={cls.labelInput}
                    value={login}
                    onChange={changeLogin}
                />
                <BaseInput
                    label={t('enter-password')}
                    labelClassName={cls.labelInput}
                    value={password}
                    onChange={changePassword}
                />
            </div>
            <LoginButton className={cls.loginButton} />
        </div>
    );
};

export default LoginForm;
