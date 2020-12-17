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
