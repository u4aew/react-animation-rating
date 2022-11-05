import * as React from 'react';
import { version } from '../package.json';

const brandTitle = `UI Components ${version}`;

export const parameters = {
  options: {
    storySort: {
      includeName: true,
      locales: 'en-US',
      order: [['Components Group 1', 'Components Group 2']],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (renderStory) => <div style={{ padding: '30px' }}>{renderStory()}</div>,
  (Story) => <Story />,
];
