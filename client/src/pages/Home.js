import Header from "../components/Header";
import { Card } from "../components/Card";
import IconRecycle from "../assets/icon-recycle-action.svg";
import IconBox from "../assets/icon-box-action.svg";
import IconTrophy from "../assets/icon-trophy-action.svg";
import { useEffect, useState } from "react";
import { countAllTasks, countDoneTasks } from "../api/challenge";

export default function Home() {
  const [amountTasks, setAmountTasks] = useState();
  const [amountDoneTasks, setAmountDoneTasks] = useState();

  useEffect(() => {
    async function fetchData() {
      const arrayLength = await countAllTasks();
      setAmountTasks(arrayLength);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const arrayLength = await countDoneTasks();
      setAmountDoneTasks(arrayLength);
    }
    fetchData();
  }, []);

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
        infoOne={`Gesamtanzahl Aufgaben: ${amountTasks}`}
        infoTwo={`Gelöste Aufgaben: ${amountDoneTasks}`}
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
