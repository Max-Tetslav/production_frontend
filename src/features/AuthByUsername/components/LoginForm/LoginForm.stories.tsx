import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from 'shared/lib/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'Features/AuthByUsername/LoginForm',
    component: LoginForm,
    argTypes: {
        className: {
            control: {
                type: null
            }
        },
        onSubmit: {
            control: {
                type: null
            }
        }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});

Default.decorators = [
    StoreDecorator({
        loginForm: {
            username: '',
            password: ''
        }
    })
];

export const WithError = Template.bind({});

WithError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'gjgjgjh',
            password: '80098',
            error: 'Ошибка'
        }
    })
];

export const WithLoading = Template.bind({});

WithLoading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true
        }
    })
];
