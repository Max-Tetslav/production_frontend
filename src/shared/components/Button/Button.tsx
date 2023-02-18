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
    OUTLINE = 'outline'
}

interface IButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        ClassAttributes<HTMLButtonElement> {
    variant?: string;
}

const Button: FC<IButtonProps> = forwardRef((props, ref) => {
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
            ref={ref}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export default Button;
