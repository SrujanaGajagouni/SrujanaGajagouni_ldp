import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select, { SelectProp } from '../../atoms/Select/Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as Meta;

const Template: StoryFn<SelectProp> = (args) => <Select {...args} />;

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  options: ['', 'Male', 'Female', 'Other'],
  value: '',
  onChange: (e) => console.log(e.target.value),
};
