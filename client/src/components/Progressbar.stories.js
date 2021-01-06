import React from "react";
import Progressbar from "./Progressbar";

export default {
  title: "Components/Progressbar",
  parameters: { layout: "centered" },
  component: Progressbar,
};

const Template = (args) => <Progressbar {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  progress: 75,
  size: 100,
  strokeWidth: 10,
};
