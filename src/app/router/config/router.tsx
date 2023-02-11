import { RouteProps } from 'react-router-dom';

import { About, Main } from 'pages';

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routesPathList: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
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
};
