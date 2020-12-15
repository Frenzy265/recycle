import React from "react";
import { Task } from "./Task";

export default {
  title: "Components/Task",
  parameters: { layout: "centered" },
  component: Task,
};

const Template = (args) => <Task {...args} />;

export const Challenge = Template.bind({});
Challenge.args = {
  done: true,
  label: "reuse",
  task:
    "Anstatt etwas Neues zu kaufen, nutze die Angebote auf ebay (Kleinanzeigen), Medimops oder Second Hand Läden. Damit sparst du nicht nur Geld, sondern ermöglichst gut erhaltene Dingen ein zweites Leben.",
};
