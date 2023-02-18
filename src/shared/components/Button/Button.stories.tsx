import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonVariants } from './Button';

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: {
        variant: {
            options: Object.values(ButtonVariants),
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clean = Template.bind({});

Clean.args = {
    children: 'Кнопка',
    variant: ButtonVariants.CLEAN,
};

export const Outline = Template.bind({});

Outline.args = {
    children: 'Кнопка',
    variant: ButtonVariants.OUTLINE,
};
