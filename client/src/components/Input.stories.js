import React from "react";
import { InputField } from "./Input";
import IconAdd from "../assets/icon-add-primary.svg";
import IconSearch from "../assets/icon-search-primary.svg";

export default {
  title: "Components/Inputfield",
  parameters: { layout: "centered" },
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const NewItem = Template.bind({});
NewItem.args = {
  title: "Neuer Eintrag",
  icon: IconAdd,
  alt: "Icon Add",
};

export const Search = Template.bind({});
Search.args = {
  title: "Was möchtest du recyceln?",
  icon: IconSearch,
  alt: "Icon Search",
};
