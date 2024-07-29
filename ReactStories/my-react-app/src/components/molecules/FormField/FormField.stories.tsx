import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormField, { FormFieldProp } from '../../molecules/FormField/FormField';

export default {
  title: 'Molecules/FormField',
  component: FormField,
} as Meta;

const Template: StoryFn<FormFieldProp> = (args) => <FormField {...args} />;

export const TextField = Template.bind({});
TextField.args = {
  label: 'Name',
  type: 'text',
  id: 'name',
  value: '',
  onChange: (e) => console.log(e.target.value),
};

export const EmailField = Template.bind({});
EmailField.args = {
  label: 'Email',
  type: 'email',
  id: 'email',
  value: '',
  onChange: (e) => console.log(e.target.value),
};

export const SelectField = Template.bind({});
SelectField.args = {
  label: 'Gender',
  type: 'select',
  id: 'gender',
  value: '',
  onChange: (e) => console.log(e.target.value),
  options: ['', 'Male', 'Female', 'Other'],
};
