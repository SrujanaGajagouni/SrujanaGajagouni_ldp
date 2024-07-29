import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Form from '../../organisms/Form/Form';

export default {
  title: 'Organisms/Form',
  component: Form,
} as Meta;

const Template: StoryFn = (args) => <Form {...args} />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {};
