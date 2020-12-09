const { collection } = require("./database");

async function getBoxes() {
  const result = await collection("boxes").find({}).toArray();
  return result;
}

async function getBoxByTitle(title) {
  const items = await collection("boxes").findOne({ title: title });
  return items;
}

async function deleteBoxByTitle(title) {
  const deleteBox = await collection("boxes").deleteOne({ title: title });
  return deleteBox;
}

exports.getBoxes = getBoxes;
exports.getBoxByTitle = getBoxByTitle;
exports.deleteBoxByTitle = deleteBoxByTitle;
