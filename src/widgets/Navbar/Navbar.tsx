import { FC, useCallback, useState } from 'react';
import { cn } from 'shared/lib/helpers/classnames';
import { LoginButton, LoginForm } from 'features/AuthByUsername';
import { Modal } from 'shared/components/Modal';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

const Navbar: FC<INavbarProps> = (props) => {
    const { className } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModalHandler = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <div className={cn(cls.container, className)}>
            <div className={cls.linksBox}>
                <LoginButton onClick={openModalHandler} />
                <Modal className={cls.modalContainer} isOpen={isModalOpen} onClose={closeModalHandler}>
                    <LoginForm />
                </Modal>
            </div>
        </div>
    );
};

export default Navbar;
