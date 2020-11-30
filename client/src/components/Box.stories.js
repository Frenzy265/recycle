import React from "react";
import Box from "./Box";
import IconBox from "../assets/icon-box-primary.svg";
import IconBoxNew from "../assets/icon-box-new-primary.svg";

export default {
  title: "Components/Box",
  parameters: { layout: "centered" },
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const New = Template.bind({});
New.args = {
  existing: false,
  children: [
    <>
      <img src={IconBoxNew} alt="Icon recycle new box" />
      <p>Neue Kiste</p>
    </>,
  ],
};

export const Old = Template.bind({});
Old.args = {
  existing: true,
  children: [
    <>
      <img src={IconBox} alt="Icon Box" />
      <p>Wertstoffhof</p>
    </>,
  ],
};
