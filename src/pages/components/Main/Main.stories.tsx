import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from './Main';

export default {
    title: 'Pages/Main',
    component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});

Default.storyName = 'Main';
Default.args = {};
