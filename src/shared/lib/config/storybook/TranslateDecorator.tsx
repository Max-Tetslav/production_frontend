import { I18nextProvider } from 'react-i18next';
import { Story, StoryContext } from '@storybook/react';

import { Suspense, useEffect } from 'react';
import i18n from '../i18n/i18n';

const TranslateDecorator = (StoryComponent: Story, context: StoryContext) => {
    const {
        globals: { locale }
    } = context;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback="">
                <StoryComponent />
            </Suspense>
        </I18nextProvider>
    );
};

export default TranslateDecorator;
