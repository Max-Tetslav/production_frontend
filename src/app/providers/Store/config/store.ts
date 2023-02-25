import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateScheme } from 'shared/lib/config/store';

export function createReduxStore(initialState?: StateScheme) {
    return configureStore({
        reducer: {
            counter: counterReducer,
            authData: userReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
