import { Suspense } from 'react';
import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/Router';
import { ErrorBoundary } from './providers/ErrorBoundary';
import RootProvider from './providers/RootProvider';

const App = () => (
    <RootProvider>
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
    </RootProvider>
);

export default App;
