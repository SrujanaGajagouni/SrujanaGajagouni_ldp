import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormPage from '../../pages/FormPage/FormPage';

export default {
  title: 'Pages/FormPage',
  component: FormPage,
} as Meta;

const Template: StoryFn = (args) => <FormPage {...args} />;

export const DefaultFormPage = Template.bind({});
DefaultFormPage.args = {};
