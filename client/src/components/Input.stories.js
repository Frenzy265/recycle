import React from "react";
import Input from "./Button";
import IconRecycle from "../assets/icon-recycle.svg";

export default {
  title: "Components/Input",
  parameters: { layout: "centered" },
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Status = Template.bind({});
Status.args = {
  active: true,
  children: [
    <>
      <p>Erfolgreich recycled</p>
      <img src={IconRecycle} alt="Icon recycle" />
    </>,
  ],
};
