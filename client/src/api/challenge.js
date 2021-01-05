export async function getAllTasks() {
  const response = await fetch("/api/challenge");
  const results = await response.json();
  return results;
}

export async function countTasks() {
  const response = await fetch("/api/challenge/statistic");
  const statistic = await response.json();
  return statistic;
}

export async function updateStatusTask(task) {
  const response = await fetch(`/api/challenge/${task._id}`, {
    method: "PATCH",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });
  const update = await response.json();
  return update;
}
