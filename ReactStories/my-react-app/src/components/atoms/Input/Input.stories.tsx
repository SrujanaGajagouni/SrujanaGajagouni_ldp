import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input, { InputProps } from '../../atoms/Input/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;


const Template: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    action('Input value changed')(e.target.value); 
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  placeholder: 'Enter text',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  placeholder: 'Enter email',
};
