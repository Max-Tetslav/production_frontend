import { lazy } from 'react';

export default lazy(
    () => new Promise((res) => {
        // @ts-ignore
        setTimeout(() => res(import('./Main')), 1500);
    }),
);
