import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './Store';
import { ThemeProvider } from './Theme';

const RootProvider: FC = ({ children }) => (
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);

export default RootProvider;
