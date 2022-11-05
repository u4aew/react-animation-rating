import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RatingAnimation } from './RatingAnimation';

export default {
  title: 'Components/Rating',
  component: RatingAnimation,
  parameters: {
    design: [],
  },
  argTypes: {},
} as ComponentMeta<typeof RatingAnimation>;

const Template: ComponentStory<typeof RatingAnimation> = (args) => {
  return (
    <div>
      <RatingAnimation value={args.value} countItem={5} />
    </div>
  );
};

export const Playgrounds = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playgrounds.args = {
  value: 3,
};
