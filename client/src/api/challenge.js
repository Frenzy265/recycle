export async function getAllTasks() {
  const response = await fetch("/api/challenge");
  const results = await response.json();
  return results;
}

export async function countAllTasks() {
  const response = await fetch("/api/challenge");
  const amount = await response.json();
  const length = amount.length;
  return length;
}

export async function countDoneTasks() {
  const response = await fetch("/api/challenge/done=false");
  const amount = await response.json();
  return amount;
}
