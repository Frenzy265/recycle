export async function getBoxes() {
  const response = await fetch("/api/boxes");
  const boxes = await response.json();
  return boxes;
}

export async function getBoxByTitle(title) {
  const response = await fetch(`http://localhost:5000/boxes?title=${title}`);
  const box = await response.json();
  console.log(box);
  return box[0];
}

export async function postBoxById(box) {
  const response = await fetch(`http://localhost:5000/boxes`, {
    method: "POST",
    body: JSON.stringify(box),
    headers: { "Content-Type": "application/json" },
  });
  const newBox = await response.json();
  return newBox;
}

export async function deleteBoxById(id) {
  await fetch(`http://localhost:5000/boxes/${id}`, {
    method: "DELETE",
  });
}
