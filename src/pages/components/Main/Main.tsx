import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import BugButton from 'features/BugButton/BugButton';
import cls from './Main.module.scss';

const Main: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div className={cls.container}>
            <BugButton />
            <p>{t('main-page')}</p>
        </div>
    );
};

export default Main;
