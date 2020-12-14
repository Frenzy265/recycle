const { collection } = require("./database");

async function getAllResults() {
  const results = await collection("searchBar").find({}).toArray();
  return results;
}

async function getResult(title) {
  const result = await collection("searchBar").findOne(title);
  return result;
}

exports.getAllResults = getAllResults;
exports.getResult = getResult;
