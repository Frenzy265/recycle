import React from "react";
import { Card } from "./Card";
import IconRecycle from "../assets/icon-recycle-action.svg";
import IconBox from "../assets/icon-box-action.svg";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Introduction = Template.bind({});
Introduction.args = {
  title: "Reduce",
  icon: IconRecycle,
  alt: "Icon Recycle",
  infoOne:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
};

export const Overview = Template.bind({});
Overview.args = {
  title: "Recyclingkisten",
  icon: IconBox,
  alt: "Icon Box",
  infoOne: "Offene Boxen: 5",
  infoTwo: "Geschlossene Boxen: 10",
};
