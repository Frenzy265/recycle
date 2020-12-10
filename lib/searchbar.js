const { collection } = require("./database");

async function getAllResults() {
  const result = await collection("searchBar").find({}).toArray();
  return result;
}

exports.getAllResults = getAllResults;
