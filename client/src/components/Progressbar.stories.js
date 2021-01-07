import React from "react";
import Progressbar from "./Progressbar";

export default {
  title: "Components/Progressbar",
  parameters: { layout: "centered" },
  component: Progressbar,
};

export const progress = () => <Progressbar />;
