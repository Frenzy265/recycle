//tested and is working - at page BoxStart :-)
export async function getBoxes() {
  const response = await fetch("http://localhost:5000/boxes");
  const boxes = await response.json();
  return boxes;
}

export async function getBoxById(id) {
  const response = await fetch(`http://localhost:5000/boxes/${id}`);
  const box = await response.json();
  return box;
}

export async function deleteBoxById(id) {
  await fetch(`http://localhost:5000/boxes/${id}`, { method: "DELETE" });
}

export async function deleteItemByName(id, name) {
  await fetch(`http://localhost:500/boxes/${id}/${name}`, { method: "DELETE" });
}

export async function postBox(box) {
  const response = await fetch("http://localhost:5000/boxes", {
    method: "POST",
    header: { "content-Type": "application/json" },
    body: JSON.stringify(box),
  });
  const newBox = await response.json();
  return newBox;
}
