import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonComponent from "./Button";

export default {
  title: "Atoms/Button",
  component: ButtonComponent,
  argTypes: {},
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
  label: "Hello world",
};
