import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginButton, { LoginButtonStatuses } from './LoginButton';

export default {
    title: 'Features/AuthByUsername/LoginButton',
    component: LoginButton,
    argTypes: {
        square: {
            control: {
                type: null
            }
        }
    }
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;

export const SignIn = Template;

SignIn.storyName = 'SignIn';
SignIn.args = {
    status: LoginButtonStatuses.SIGN_IN
};

export const SignOut = Template.bind({});

SignOut.storyName = 'SignOut';
SignOut.args = {
    status: LoginButtonStatuses.SIGN_OUT
};
