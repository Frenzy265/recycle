import Localbase from "localbase";

let db = new Localbase("db");

export async function getBoxes() {
  return await db.collection("boxes").get();
}

export function getBoxByTitle(title) {
  return db.collection("boxes").doc({ title: title }).get();
}

export function setItemByTitle(title, allItems) {
  return db.collection("boxes").doc({ title: title }).set({
    title: title,
    items: allItems,
  });
}

export function addBox(title, item) {
  return db.collection("boxes").add({
    title: title,
    items: [item],
  });
}

export function deleteBoxByTitle(boxtitle) {
  return db.collection("boxes").doc({ title: boxtitle }).delete();
}
