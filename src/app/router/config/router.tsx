import { RouteProps } from 'react-router-dom';

import { About, Main } from 'pages';
import { PageNotFound } from 'widgets/PageNotFound';

export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const routesPathList: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.NOT_FOUND]: '*',
};

export const routeList: Record<EAppRoutes, RouteProps> = {
    [EAppRoutes.MAIN]: {
        path: routesPathList[EAppRoutes.MAIN],
        element: <Main />,
    },
    [EAppRoutes.ABOUT]: {
        path: routesPathList[EAppRoutes.ABOUT],
        element: <About />,
    },
    [EAppRoutes.NOT_FOUND]: {
        path: routesPathList[EAppRoutes.NOT_FOUND],
        element: <PageNotFound />,
    },
};
