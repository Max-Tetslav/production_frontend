import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/constants/localStorage';
import { routeList } from '../config/router';

const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (user) {
            dispatch(userActions.setAuthData(JSON.parse(user)));
        }
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeList).map(({ path, element }) => (
                    <Route key={path} path={path} element={<div className="page-wrapper flex-grow-1">{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
