import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import useTheme from 'shared/lib/hooks/useTheme';
import { Suspense } from 'react';
import { AppRouter } from './router';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
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
    );
};

export default App;
