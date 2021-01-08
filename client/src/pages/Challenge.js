import { useEffect, useState } from "react";
import { getAllTasks, updateStatusTask } from "../api/challenge";
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

  const handleClickStatus = async (task) => {
    await updateStatusTask(task);
  };

  return (
    <>
      <Header>Challenge</Header>
      {tasks?.map((task) => (
        <CardChallenge
          key={task._id}
          done={task.done}
          task={task.task}
          onClick={() => handleClickStatus(task)}
        ></CardChallenge>
      ))}
    </>
  );
}
