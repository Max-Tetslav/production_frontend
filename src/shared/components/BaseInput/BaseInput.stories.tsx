import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseInput from './BaseInput';

export default {
    title: 'Shared/BaseInput',
    component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => <BaseInput {...args} />;

export const Default = Template.bind({});

Default.storyName = 'BaseInput';
Default.args = {
    label: 'Введите текст',
};
