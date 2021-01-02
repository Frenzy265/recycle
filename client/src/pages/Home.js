import Header from "../components/Header";
import { Card } from "../components/Card";
import IconRecycle from "../assets/icon-recycle-action.svg";
import IconBox from "../assets/icon-box-action.svg";
import IconTrophy from "../assets/icon-trophy-action.svg";
import IconSearch from "../assets/icon-search-action.svg";
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
        title="Reduce, Reuse, Recycle"
        icon={IconRecycle}
        alt="Icon Recycle"
        infoOne="Diese drei Prinzipien helfen dir nachhaltiger zu Leben. Reduziere deinen Konsum, verwende Dinge wieder und entsorge Werstoffe korrekt."
      />
      <Card
        title="Recycling"
        icon={IconSearch}
        alt="Icon Search"
        infoOne="Hier findest du zahlreiche Informationen zum richtigen Entsorgen von Abfällen."
      />
      <Card
        title="Sammelboxen"
        icon={IconBox}
        alt="Icon Box"
        infoOne="Erstelle dir verschiedene Boxen um Dinge zu sammeln, die du recyceln, verkaufen oder verschenken möchtest. Damit behältst du immer den Überblick!"
        infoTwo="Offene Boxen:"
      />
      <Card
        title="Challenges"
        icon={IconTrophy}
        alt="Icon Trophy"
        infoOne="Es warten verschiedene Aufagben auf dich, die dir helfen, nachhaltiger zu leben und den drei Prinzipien nachzugehen."
        infoTwo={`Gelöste Aufgaben: ${amountTasks?.done}`}
        // {`Gesamtanzahl Aufgaben: ${amountTasks?.all}`}
      />
    </>
  );
}
