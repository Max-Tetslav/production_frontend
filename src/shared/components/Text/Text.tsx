import { FC } from 'react';
import { cn } from 'shared/lib/helpers/classnames';

import cls from './Text.module.scss';

export enum TextVariants {
    PRIMARY = 'primary',
    DANGER = 'danger'
}

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    titleClassname?: string;
    textClassname?: string;
    variant?: TextVariants;
}

const Text: FC<ITextProps> = (props) => {
    const {
        className, title, text, textClassname, titleClassname, variant = TextVariants.PRIMARY
    } = props;

    return (
        <div className={cn(cls.container, className, cls[variant])}>
            {title && <p className={cn(cls.title, titleClassname)}>{title}</p>}
            {text && <p className={cn(cls.text, textClassname)}>{text}</p>}
        </div>
    );
};

export default Text;
