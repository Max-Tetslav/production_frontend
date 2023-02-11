import { FC } from 'react';
import { Loader } from 'shared/components/Loader';
import { cn } from 'shared/lib/helpers/classnames';

import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

const PageLoader: FC<IPageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div
            className={cn(
                cls.container,
                className,
                'flex-center',
                'flex-grow-1',
            )}
        >
            <Loader />
        </div>
    );
};

export default PageLoader;
