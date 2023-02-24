import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import { StoreProvider } from 'app/providers/Store';
import { DeepPartial } from 'redux';
import i18nForTests from '../config/i18n/i18nForTests';
import { StateScheme } from '../config/store';

export interface IRenderComponentOptions {
    route?: string;
    initialState?: DeepPartial<StateScheme>;
}

const renderWithProviders = (component: ReactNode, options: IRenderComponentOptions = {}) => {
    const { route = '/', initialState } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};

export default renderWithProviders;
