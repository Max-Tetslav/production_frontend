import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { StateScheme } from 'shared/lib/config/store';
import { AppRouter } from './providers/Router';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { StoreProvider } from './providers/Store';
import { ThemeProvider } from './providers/Theme';

const App = () => (
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <div className="app">
                    <Suspense fallback="">
                        <ErrorBoundary>
                            <Navbar />
                            <div className="flex">
                                <Sidebar />
                                <AppRouter />
                            </div>
                        </ErrorBoundary>
                    </Suspense>
                </div>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);

export default App;
