import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';

export default {
    title: 'Features/AuthByUsername/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template;

Default.storyName = 'LoginForm';
