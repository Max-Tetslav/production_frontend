import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateScheme } from 'shared/lib/config/store';

export function createReduxStore(initialState?: StateScheme) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
