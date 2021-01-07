import React from "react";
import { CardDefault } from "./Card";
import IconRecycle from "../assets/icon-recycle-action.svg";
import IconBox from "../assets/icon-box-action.svg";

export default {
  title: "Components/CardDefault",
  parameters: { layout: "centered" },
  component: CardDefault,
};

const Template = (args) => <CardDefault {...args} />;

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
