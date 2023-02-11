import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/helpers/classnames';

import cls from './PageNotFound.module.scss';

interface IPageNotFoundProps {
    className?: string;
}

const PageNotFound: FC<IPageNotFoundProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div
            className={cn(
                cls.container,
                className,
                'flex-center',
                'flex-grow-1',
            )}
        >
            {t('not-found-page')}
        </div>
    );
};

export default PageNotFound;
