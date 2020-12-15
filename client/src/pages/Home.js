import Header from "../components/Header";
import { Card } from "../components/Card";
import IconRecycle from "../assets/icon-recycle-action.svg";
import IconBox from "../assets/icon-box-action.svg";

export default function Home() {
  return (
    <>
      <Header>Reduce, Reuse, Recycle</Header>
      <Card
        title="Reduce"
        icon={IconRecycle}
        alt="Icon Recycle"
        infoOne="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
      <Card
        title="Recyclingkisten"
        icon={IconBox}
        alt="Icon Box"
        infoOne="Offene Boxen: 5"
        infoTwo="Geschlossene Boxen: 10"
      />
      <Card
        title="Reuse"
        icon={IconRecycle}
        alt="Icon Recycle"
        infoOne="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
      <Card
        title="Recycle"
        icon={IconRecycle}
        alt="Icon Recycle"
        infoOne="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
    </>
  );
}
