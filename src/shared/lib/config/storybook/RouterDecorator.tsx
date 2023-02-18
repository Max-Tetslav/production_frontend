import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';

const RouterDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);

export default RouterDecorator;
