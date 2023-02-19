import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonSizes, ButtonVariants } from './Button';

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: {
        variant: {
            options: Object.values(ButtonVariants),
            control: { type: 'radio' },
        },
        size: {
            options: Object.values(ButtonSizes),
            control: { type: 'radio' },
        },
        square: {
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clean = Template.bind({});

Clean.argTypes = {
    variant: {
        control: {
            type: null,
        },
    },
    square: {
        control: {
            type: null,
        },
    },
};

Clean.args = {
    children: 'Кнопка',
    variant: ButtonVariants.CLEAN,
    size: ButtonSizes.M,
};

export const Outline = Template.bind({});

Outline.argTypes = {
    variant: {
        control: {
            type: null,
        },
    },
    square: {
        control: {
            type: null,
        },
    },
};

Outline.args = {
    children: 'Кнопка',
    variant: ButtonVariants.OUTLINE,
    size: ButtonSizes.M,
};

export const Background = Template.bind({});

Background.argTypes = {
    variant: {
        control: {
            type: null,
        },
    },
    square: {
        control: {
            type: null,
        },
    },
};

Background.args = {
    children: 'Кнопка',
    variant: ButtonVariants.BACKGROUND,
    size: ButtonSizes.M,
};

export const Background_Inverted = Template.bind({});

Background_Inverted.argTypes = {
    variant: {
        control: {
            type: null,
        },
    },
    square: {
        control: {
            type: null,
        },
    },
};

Background_Inverted.args = {
    children: 'Кнопка',
    variant: ButtonVariants.BACKGROUND_INVERTED,
    size: ButtonSizes.M,
};

export const Square_Size_M = Template.bind({});

Square_Size_M.argTypes = {
    children: {
        control: {
            type: null,
        },
    },
    size: {
        control: {
            type: null,
        },
    },
    square: {
        control: {
            type: null,
        },
    },
};

Square_Size_M.args = {
    children: '>',
    variant: ButtonVariants.BACKGROUND_INVERTED,
    size: ButtonSizes.M,
    square: true,
};

export const Square_Size_L = Template.bind({});

Square_Size_L.argTypes = {
    children: {
        control: {
            type: null,
        },
    },
    size: {
        control: {
            type: null,
        },
    },
    square: {
        control: {
            type: null,
        },
    },
};

Square_Size_L.args = {
    children: '>',
    variant: ButtonVariants.BACKGROUND_INVERTED,
    size: ButtonSizes.L,
    square: true,
};

export const Square_Size_Xl = Template.bind({});

Square_Size_Xl.argTypes = {
    children: {
        control: {
            type: null,
        },
    },
    size: {
        control: {
            type: null,
        },
    },
    square: {
        control: {
            type: null,
        },
    },
};

Square_Size_Xl.args = {
    children: '>',
    variant: ButtonVariants.BACKGROUND_INVERTED,
    size: ButtonSizes.XL,
    square: true,
};
