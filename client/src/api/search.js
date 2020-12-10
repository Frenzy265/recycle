export async function getAllResults() {
  const response = await fetch("/api/searchBar");
  const results = await response.json();
  return results;
}
