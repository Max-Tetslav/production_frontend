import {
    ChangeEvent, FC, memo, useCallback
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib/helpers/classnames';
import { BaseInput } from 'shared/components/BaseInput';
import { Text, TextVariants } from 'shared/components/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slices/loginSlice';
import { LoginButton } from '../LoginButton';
import { loginByUsername } from '../../model/services/login';
import cls from './LoginForm.module.scss';
import { LoginButtonStatuses } from '../LoginButton/LoginButton';

interface ILoginFormProps {
    className?: string;
    onSubmit: VoidFunction;
}

const LoginForm: FC<ILoginFormProps> = (props) => {
    const { className, onSubmit } = props;
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error
    } = useSelector(getLoginState);

    const changeLoginHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    }, []);

    const changePasswordHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    }, []);

    const loginClickHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [username, password]);

    const { t } = useTranslation();

    return (
        <div className={cn(cls.container, className)}>
            <Text title={t('auth-form-title')} />
            <div className={cls.inputContainers}>
                <BaseInput
                    label={t('enter-login')}
                    labelClassName={cls.labelInput}
                    value={username}
                    onChange={changeLoginHandler}
                />
                <BaseInput
                    label={t('enter-password')}
                    labelClassName={cls.labelInput}
                    value={password}
                    onChange={changePasswordHandler}
                />
            </div>
            <LoginButton
                className={cls.loginButton}
                onClick={loginClickHandler}
                disabled={isLoading}
                status={LoginButtonStatuses.SIGN_IN}
            />
            {error && <Text text={t('auth-form-error')} variant={TextVariants.DANGER} />}
        </div>
    );
};

export default memo(LoginForm);
