import { FC, InputHTMLAttributes } from 'react';
import { cn } from 'shared/lib/helpers/classnames';

import cls from './BaseInput.module.scss';

interface IBaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelClassName?: string;
    labelId?: string;
    labelFor?: string;
}

const BaseInput: FC<IBaseInputProps> = (props) => {
    const { className, label, labelClassName, labelId, labelFor, id } = props;

    return (
        <label className={cn(cls.container, labelClassName)} id={labelId} htmlFor={labelFor}>
            {label}
            <input className={cn(cls.input, className)} type="text" id={labelFor || id} {...props} />
        </label>
    );
};

export default BaseInput;
