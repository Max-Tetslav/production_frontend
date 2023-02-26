import {
    ButtonHTMLAttributes,
    ClassAttributes,
    FC,
    forwardRef,
} from 'react';
import { cn } from 'shared/lib/helpers/classnames';

import cls from './Button.module.scss';

export enum ButtonVariants {
    CLEAN = 'clean',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSizes {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export interface IButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        ClassAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    square?: boolean;
}

const Button: FC<IButtonProps> = forwardRef((props, ref) => {
    const {
        className,
        children,
        type,
        square,
        size = ButtonSizes.M,
        variant = ButtonVariants.CLEAN,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(cls.container, className, cls[variant], cls[size], { [cls.square]: square })}
            // eslint-disable-next-line react/button-has-type
            type={type || 'button'}
            ref={ref}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export default Button;
