import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginButton from './LoginButton';

export default {
    title: 'Features/AuthByUsername/LoginButton',
    component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;

export const Default = Template;

Default.storyName = 'LoginButton';
