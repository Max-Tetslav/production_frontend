import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/components/Button';
import { Modal } from 'shared/components/Modal';
import { cn } from 'shared/lib/helpers/classnames';

import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

const Navbar: FC<INavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

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
                <Button onClick={openModalHandler} variant={ButtonVariants.BACKGROUND}>
                    {t('SignIn')}
                </Button>
                <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
                    {3}
                </Modal>
            </div>
        </div>
    );
};

export default Navbar;
