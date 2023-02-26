import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text, { TextVariants } from './Text';

export default {
    title: 'Shared/Text',
    component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleAndText = Template.bind({});

TitleAndText.args = {
    title: 'Заголовок',
    text: 'Текст'
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
    title: 'Заголовок'
};

export const OnlyText = Template.bind({});

OnlyText.args = {
    text: 'Текст'
};

export const DangerVariant = Template.bind({});

DangerVariant.args = {
    title: 'Заголовок',
    text: 'Текст',
    variant: TextVariants.DANGER
};
