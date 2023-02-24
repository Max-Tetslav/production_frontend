import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routeList } from '../config/router';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeList).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper flex-grow-1">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
