import Header from "../components/Header";
import { Card } from "../components/Card";
import IconRecycle from "../assets/icon-recycle-action.svg";
import IconBox from "../assets/icon-box-action.svg";
import IconTrophy from "../assets/icon-trophy-action.svg";
import { useEffect, useState } from "react";
import { countTasks } from "../api/challenge";

export default function Home() {
  const [amountTasks, setAmountTasks] = useState({ done: 0, all: 0 });

  useEffect(() => {
    async function fetchData() {
      const result = await countTasks();
      setAmountTasks(result);
    }
    fetchData();
  }, [amountTasks]);

  return (
    <>
      <Header>Reduce, Reuse, Recycle</Header>
      <Card
        title="Reduce"
        icon={IconRecycle}
        alt="Icon Recycle"
        infoOne="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua."
      />
      <Card
        title="Challenges"
        icon={IconTrophy}
        alt="Icon Trophy"
        infoOne={`Gesamtanzahl Aufgaben: ${amountTasks?.all}`}
        infoTwo={`Gelöste Aufgaben: ${amountTasks?.done}`}
      />
      <Card
        title="Reuse"
        icon={IconRecycle}
        alt="Icon Recycle"
        infoOne="Lorem ipsum dolor sit amet, magna aliquyam erat, sed diam voluptua."
      />
      <Card
        title="Recyclingkisten"
        icon={IconBox}
        alt="Icon Box"
        infoOne="Offene Boxen: 5"
        infoTwo="Geschlossene Boxen: 10"
      />
      <Card
        title="Recycle"
        icon={IconRecycle}
        alt="Icon Recycle"
        infoOne="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua."
      />
    </>
  );
}
