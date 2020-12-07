import React from "react";
import AppHeader from "./AppHeader";

export default {
  title: "Components/AppHeader",
  parameters: { layout: "centered" },
  component: AppHeader,
};

export const header = () => <AppHeader>header</AppHeader>;
