import {
    FC, MouseEvent, ReactNode, useEffect,
} from 'react';
import { cn } from 'shared/lib/helpers/classnames';

import { Portal } from '../Portal';
import cls from './Modal.module.scss';

interface IModalProps {
    className?: string;
    contentClassName?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: VoidFunction;
    domTarget?: Element;
}

const Modal: FC<IModalProps> = (props) => {
    const {
        className, contentClassName, children, onClose, isOpen, domTarget,
    } = props;

    const clickContentHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onEscPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscPress);
        }

        return () => {
            window.removeEventListener('keydown', onEscPress);
        };
    }, [isOpen]);

    return (
        <Portal target={domTarget}>
            <div className={cn(cls.container, className, { [cls.opened]: isOpen })}>
                <div className={cn(cls.overlay)} onClick={onClose}>
                    <div className={cn(cls.content, contentClassName)} onClick={clickContentHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
