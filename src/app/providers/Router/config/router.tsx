import { RouteProps } from 'react-router-dom';

import { About, Main } from 'pages';
import { PageNotFound } from 'widgets/PageNotFound';
import { EAppRoutes, routesPathList } from 'shared/lib/config/router';

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
