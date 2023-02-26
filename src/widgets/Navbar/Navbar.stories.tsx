import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from 'shared/lib/config/storybook/StoreDecorator';

import Navbar from './Navbar';

export default {
    title: 'Widgets/Navbar',
    component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.decorators = [StoreDecorator({})];

export const Auth = Template.bind({});

Auth.storyName = 'AuthUser';
Auth.decorators = [
    StoreDecorator({
        authData: {
            user: {}
        }
    })
];
