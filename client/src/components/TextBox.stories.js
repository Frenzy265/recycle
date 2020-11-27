import { TextBox } from "../components/TextBox";
import React from "react";
import IconRecycle from "../assets/icon-recycle.svg";
import IconLightbulbAction from "../assets/icon-lightbulb-action.svg";

export default {
  title: "Components/TextBox",
  parameters: { layout: "centered" },
  component: TextBox,
};

const Template = (args) => <TextBox {...args} />;

export const SearchOutputOne = Template.bind({});
SearchOutputOne.args = {
  icon: IconRecycle,
  alt: "Icon Recycle",
  headline: "Entsorgungsmöglichkeit",
  text: "Lorem Ipsum",
};

export const SearchOutputTwo = Template.bind({});
SearchOutputTwo.args = {
  icon: IconLightbulbAction,
  alt: "Icon Lightbulb",
  headline: "Wussten Sie schon...",
  text: "Lorem Ipsum",
};
