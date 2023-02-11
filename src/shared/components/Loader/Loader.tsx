import { FC } from 'react';
import { cn } from 'shared/lib/helpers/classnames';

import cls from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
}

const Loader: FC<ILoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={cn(cls.loader, className)}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Loader;
