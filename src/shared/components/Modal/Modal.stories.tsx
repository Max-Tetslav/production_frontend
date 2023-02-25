import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';

export default {
    title: 'Shared/Modal',
    component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template;

Default.storyName = 'Modal';

Default.argTypes = {
    className: {
        control: {
            type: null
        }
    },
    onClose: {
        control: {
            type: null
        }
    },
    domTarget: {
        control: {
            type: null
        }
    }
};

Default.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum.`
};
