const { collection } = require("./database");

async function getBoxes() {
  const result = await collection("boxes").find({}).toArray();
  return result;
}

exports.getBoxes = getBoxes;
