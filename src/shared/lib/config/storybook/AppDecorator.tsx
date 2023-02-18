import { Story } from '@storybook/react';
import 'app/styles/index.scss';

const AppDecorator = (StoryComponent: Story) => (
    <div className="app normal flex-center">
        <StoryComponent />
    </div>
);

export default AppDecorator;
