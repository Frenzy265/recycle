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

async function deleteItemByName(title, item) {
  const deletedItem = await collection("boxes").updateOne(
    { title: title },
    { $pull: { items: item } }
  );
  return deletedItem;
}

async function setBoxByTitle(title, item) {
  const postBox = await collection("boxes").insertOne({
    title: title,
    items: [item],
  });
  return postBox;
}

async function setItemByTitle(title, item) {
  const updatedResult = await collection("boxes").updateOne(
    {
      title,
    },
    { $push: { items: item } }
  );
  return updatedResult;
}

exports.getBoxes = getBoxes;
exports.getBoxByTitle = getBoxByTitle;
exports.deleteBoxByTitle = deleteBoxByTitle;
exports.setBoxByTitle = setBoxByTitle;
exports.setItemByTitle = setItemByTitle;
exports.deleteItemByName = deleteItemByName;
