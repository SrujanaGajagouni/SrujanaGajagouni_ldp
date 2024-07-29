import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from '../../atoms/Button/Button';


export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  text: 'Submit',
  backgroundColor: 'blue',
  onClick: action('clicked'), 
};
