export async function getBoxes() {
  const response = await fetch("/api/boxes");
  const boxes = await response.json();
  return boxes;
}

export async function getBoxByTitle(title) {
  const response = await fetch(`/api/boxes/${title}`);
  const box = await response.json();
  return box;
}

export async function postBoxById(box) {
  const response = await fetch("/api/boxes/", {
    method: "POST",
    body: JSON.stringify(box),
    headers: { "Content-Type": "application/json" },
  });
  const newBox = await response.text();
  return newBox;
}

export async function deleteBoxByTitle(title) {
  const response = await fetch(`/api/boxes/${title}`, {
    method: "DELETE",
  });
  const answer = await response.text();
  return answer;
}

export async function addItemByTitle(item, title) {
  const response = await fetch(`api/boxes/${title}`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  });
  const newItem = await response.json();
  return newItem;
}
