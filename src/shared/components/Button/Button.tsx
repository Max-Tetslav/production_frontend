import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib/helpers/classnames';

import cls from './Button.module.scss';

export enum ButtonVariants {
    CLEAN = 'clean',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
}

const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        type,
        variant = ButtonVariants.CLEAN,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(cls.container, cls[variant], className)}
            // eslint-disable-next-line react/button-has-type
            type={type || 'button'}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
