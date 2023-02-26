import { FC, useCallback, useState } from 'react';
import { cn } from 'shared/lib/helpers/classnames';
import { LoginButton, LoginButtonStatuses, LoginForm } from 'features/AuthByUsername';
import { Modal } from 'shared/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/constants/localStorage';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export enum LoginButtonTypes {
    LOGIN = 'login',
    LOGOUT = 'logout'
}

const Navbar: FC<INavbarProps> = (props) => {
    const { className } = props;

    const dispatch = useDispatch();
    const user = useSelector(getUserAuthData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModalHandler = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const logoutHandler = useCallback(() => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        dispatch(userActions.logout());
        setIsModalOpen(false);
    }, []);

    if (user) {
        return (
            <div className={cn(cls.container, className)}>
                <div className={cls.linksBox}>
                    <LoginButton onClick={logoutHandler} status={LoginButtonStatuses.SIGN_OUT} />
                </div>
            </div>
        );
    }

    return (
        <div className={cn(cls.container, className)}>
            <div className={cls.linksBox}>
                <LoginButton onClick={openModalHandler} status={LoginButtonStatuses.SIGN_IN} />
                <Modal className={cls.modalContainer} isOpen={isModalOpen} onClose={closeModalHandler}>
                    <LoginForm onSubmit={closeModalHandler} />
                </Modal>
            </div>
        </div>
    );
};

export default Navbar;
