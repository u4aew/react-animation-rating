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
  const [value, setValue] = React.useState(3);

  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <RatingAnimation
          value={value}
          countItem={args.countItem}
          colorStar={args.colorStar}
          colorInactiveStar={args.colorInactiveStar}
          sizeStar={args.sizeStar}
          disabled={args.disabled}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export const Playgrounds = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playgrounds.args = {
  countItem: 5,
  colorStar: '#ffc107',
  colorInactiveStar: '#9e9e9e',
  sizeStar: 24,
  disabled: false,
};
