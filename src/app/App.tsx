import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import useTheme from 'shared/lib/hooks/useTheme';
import { Suspense } from 'react';
import { AppRouter } from './router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
