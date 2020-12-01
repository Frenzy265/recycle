import IconForward from "../assets/icon-arrow-forward-primary.svg";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import React from "react";
import { List } from "./ListItem";

export default {
  title: "Components/ListItems",
  parameters: { layout: "centered" },
  component: List,
};

const Template = (args) => <List {...args} />;

export const SearchItem = Template.bind({});
SearchItem.args = {
  item: "Fahrradreifen",
  icon: IconForward,
  alt: "Icon Forward",
};

export const BoxItem = Template.bind({});
BoxItem.args = {
  item: "Omas Sessel",
  icon: IconRecycle,
  alt: "Icon Recycle",
};
