import React from "react";
import Button from "./Button";
import IconRecycle from "../assets/icon-recycle-primary.svg";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
  component: Button,
};

const Template = (args) => <Button {...args} />;

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
