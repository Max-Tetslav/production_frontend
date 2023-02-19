import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import i18nForTests from '../config/i18n/i18nForTests';

export interface IRenderComponentOptions {
    route?: string;
}

const renderWithProviders = (component: ReactNode, options: IRenderComponentOptions = {}) => {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};

export default renderWithProviders;
