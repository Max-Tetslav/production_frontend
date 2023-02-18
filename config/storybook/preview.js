import {addDecorator} from '@storybook/react';
import TranslateDecorator from 'shared/lib/config/storybook/TranslateDecorator';
import i18n from '../../src/shared/lib/config/i18n/i18n';

import AppDecorator from '../../src/shared/lib/config/storybook/AppDecorator';
import RouterDecorator from '../../src/shared/lib/config/storybook/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'Normal',
    target: '.app',
    clearable: false,
    list: [
      { name: 'Normal', class: 'normal', color: '#e8e8ea' },
      { name: 'Dark', class: 'dark', color: '#0e0e75' }
    ],
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ru', title: 'Русский' },
        { value: 'en', title: 'English' },
      ],
      title: 'Locale',
    },
  },
 };

addDecorator(RouterDecorator);
addDecorator(TranslateDecorator);
addDecorator(AppDecorator);