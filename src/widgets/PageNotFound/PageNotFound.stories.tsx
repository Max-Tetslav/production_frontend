import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageNotFound from './PageNotFound';

export default {
    title: 'Widgets/PageNotFound',
    component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => <PageNotFound {...args} />;

export const Default = Template.bind({});

Default.storyName = 'PageNotFound';
