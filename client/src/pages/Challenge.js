import { useEffect, useState } from "react";
import { getAllTasks } from "../api/challenge";
import { CardChallenge } from "../components/Card";
import Header from "../components/Header";

export default function Challenge() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      const allTasks = await getAllTasks();
      if (mounted) {
        setTasks(allTasks);
      }
    }
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Header>Challenge</Header>
      {tasks?.map((task) => (
        <CardChallenge
          key={task._id}
          done={task.done}
          title={task.title}
          description={task.description}
        ></CardChallenge>
      ))}
    </>
  );
}
