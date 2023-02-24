import { DeepPartial } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateScheme } from 'shared/lib/config/store';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
    children: ReactNode;
    initialState: DeepPartial<StateScheme>;
}

const StoreProvider: FC<IStoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as StateScheme);

    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
