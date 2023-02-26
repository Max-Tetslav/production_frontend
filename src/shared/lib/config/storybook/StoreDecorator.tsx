import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StoreProvider } from 'app/providers/Store';
import { StateScheme } from '../store';

const StoreDecorator = (state: DeepPartial<StateScheme>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);

export default StoreDecorator;
