import Header from "../components/Header";
import { CardDefault, CardProgress } from "../components/Card";
import IconRecycle from "../assets/icon-recycle-action.svg";
import IconBox from "../assets/icon-box-action.svg";
import IconSearch from "../assets/icon-search-action.svg";
import { useEffect, useState } from "react";
import { countTasks } from "../api/challenge";
import { Link } from "react-router-dom";

export default function Home() {
  const [amountTasks, setAmountTasks] = useState({ done: 0, all: 0 });

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      const result = await countTasks();
      if (mounted) {
        setAmountTasks(result);
      }
    }
    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  const progress = (amountTasks.done * 100) / amountTasks.all;

  return (
    <>
      <Header>Reduce, Reuse, Recycle</Header>
      <CardDefault
        title="Reduce, Reuse, Recycle"
        icon={IconRecycle}
        alt="Icon Recycle"
        infoOne="Diese drei Prinzipien helfen dir nachhaltiger zu Leben. Reduziere deinen Konsum, verwende Dinge wieder und entsorge Werstoffe korrekt."
      />
      <Link to="/search">
        <CardDefault
          title="Recycling"
          icon={IconSearch}
          alt="Icon Search"
          infoOne="Hier findest du zahlreiche Informationen zum richtigen Entsorgen von Abfällen."
        />
      </Link>
      <Link to="/challenge">
        <CardProgress
          progress={progress}
          title="Challenges"
          infoOne="Es warten verschiedene Aufagben auf dich, die dir helfen, nachhaltiger zu leben und den drei Prinzipien nachzugehen."
          infoTwo={`Gelöste Aufgaben: ${amountTasks?.done} / ${amountTasks?.all}`}
        />
      </Link>
      <Link to="/box">
        <CardDefault
          title="Sammelboxen"
          icon={IconBox}
          alt="Icon Box"
          infoOne="Erstelle dir verschiedene Boxen um Dinge zu sammeln, die du recyceln, verkaufen oder verschenken möchtest. Damit behältst du immer den Überblick!"
          infoTwo="Offene Boxen: 3"
        />
      </Link>
    </>
  );
}
