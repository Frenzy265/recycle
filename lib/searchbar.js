const { collection } = require("./database");

async function getAllSearchResults() {
  const result = await collection("searchBar").find({}).toArray();
  return result;
}

exports.getAllSearchResults = getAllSearchResults;
