import React from "react";
import { CardChallenge } from "./Card";

export default {
  title: "Components/CardChallenge",
  parameters: { layout: "centered" },
  component: CardChallenge,
};

const Template = (args) => <CardChallenge {...args} />;

export const ChallengeOne = Template.bind({});
ChallengeOne.args = {
  done: true,
  title: "reuse",
  task:
    "Anstatt etwas Neues zu kaufen, nutze die Angebote auf ebay (Kleinanzeigen), Medimops oder Second Hand Läden. Damit sparst du nicht nur Geld, sondern ermöglichst gut erhaltene Dingen ein zweites Leben.",
};

export const ChallengeTwo = Template.bind({});
ChallengeTwo.args = {
  done: false,
  label: "reduce",
  task:
    "Anstatt etwas Neues zu kaufen, nutze die Angebote auf ebay (Kleinanzeigen), Medimops oder Second Hand Läden. Damit sparst du nicht nur Geld, sondern ermöglichst gut erhaltene Dingen ein zweites Leben.",
};
