import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormTemplate from '../../templates/FormTemplate/FormTemplate';

export default {
  title: 'Templates/FormTemplate',
  component: FormTemplate,
} as Meta;

const Template: StoryFn = (args) => <FormTemplate {...args} />;

export const DefaultFormTemplate = Template.bind({});
DefaultFormTemplate.args = {};
