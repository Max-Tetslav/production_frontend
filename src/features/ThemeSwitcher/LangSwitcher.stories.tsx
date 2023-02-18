import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeSwitcher from './ThemeSwitcher';

export default {
    title: 'Features/ThemeSwitcher',
    component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Default = Template.bind({});

Default.args = {};
