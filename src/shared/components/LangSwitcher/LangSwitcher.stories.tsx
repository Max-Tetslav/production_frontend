import { ComponentStory, ComponentMeta } from '@storybook/react';

import LangSwitcher from './LangSwitcher';

export default {
    title: 'Features/LangSwitcher',
    component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Default = Template.bind({});

Default.argTypes = {
    className: {
        control: {
            type: null,
        },
    },
    isShortText: {
        control: {
            type: null,
        },
    },
};

export const Short_Text = Template.bind({});

Short_Text.argTypes = {
    className: {
        control: {
            type: null,
        },
    },
    isShortText: {
        control: {
            type: null,
        },
    },
};

Short_Text.args = {
    isShortText: true,
};
