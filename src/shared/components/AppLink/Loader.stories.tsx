import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppLink, { EAppLinkThemes } from './AppLink';

export default {
    title: 'Shared/AppLink',
    component: AppLink,
    args: {
        to: '#',
        children: 'Ссылка',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    theme: EAppLinkThemes.PRIMARY,
};

export const Inverted = Template.bind({});

Inverted.args = {
    theme: EAppLinkThemes.INVERTED,
};
