const { collection } = require("./database");

async function getBoxes() {
  const result = await collection("boxes").find({}).toArray();
  return result;
}

async function getBoxByTitle(title) {
  const items = await collection("boxes").findOne({ title: title });
  return items;
}

exports.getBoxes = getBoxes;
exports.getBoxByTitle = getBoxByTitle;
