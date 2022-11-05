import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

const Stub = (): JSX.Element => <></>;

export default {
  title: 'Intro',
} as ComponentMeta<typeof Stub>;

const Template: ComponentStory<typeof Stub> = () => {
  return (
    <div>
      <h1>Intro</h1>
    </div>
  );
};

export const Intro = Template.bind({});
Intro.args = {};
