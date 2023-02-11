import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import user from 'shared/assets/user.png';
import cls from './Main.module.scss';

const Main: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div className={cls.container}>
            <p>{t('main-page')}</p>
        </div>
    );
};

export default Main;
