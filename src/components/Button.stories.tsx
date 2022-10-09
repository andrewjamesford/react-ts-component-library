import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};
