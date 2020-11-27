import IconForward from "../assets/icon-arrow-forward.svg";
import IconRecycle from "../assets/icon-recycle.svg";
import React from "react";
import { ListItems } from "./ListItem";

export default {
  title: "Components/ListItems",
  parameters: { layout: "centered" },
  component: ListItems,
};

const Template = (args) => <ListItems {...args} />;

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
