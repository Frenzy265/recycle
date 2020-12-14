export async function getAllResults() {
  const response = await fetch("/api/searchBar");
  const results = await response.json();
  return results;
}

export async function getResult(title) {
  const response = await fetch(`/api/searchBar/${title}`);
  const result = await response.json();
  return result;
}
