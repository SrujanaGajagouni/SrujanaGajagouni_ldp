import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label, { LabelProps } from '../../atoms/Label/Label';

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  htmlFor: 'input-id',
  text: 'Label Text',
};
