export async function getAllTasks() {
  const response = await fetch("/api/challenge");
  const results = await response.json();
  return results;
}

export async function countAllTasks() {
  const response = await fetch("/api/challenge");
  const amount = await response.json().length();
  return amount;
}
