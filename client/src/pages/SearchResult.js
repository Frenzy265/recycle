import { TextBox } from "../components/TextBox";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import IconLightBulb from "../assets/icon-lightbulb-action.svg";
import Header from "../components/Header";

export default function SearchResult() {
  return (
    <>
      <Header>Platzhalter</Header>
      <TextBox
        icon={IconRecycle}
        alt="Icon Recycle"
        headline="Entsorgungsmöglichkeit"
        text="Lorem Ipsum"
      />
      <TextBox
        icon={IconLightBulb}
        alt="Icon Lightbulb"
        headline="Wussten Sie schon..."
        text="Lorem Ipsum"
      />
    </>
  );
}
