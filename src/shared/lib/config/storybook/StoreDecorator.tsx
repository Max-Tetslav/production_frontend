import { Story } from '@storybook/react';

import { StoreProvider } from 'app/providers/Store';

const StoreDecorator = (StoryComponent: Story) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);

export default StoreDecorator;
