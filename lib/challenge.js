const { collection } = require("./database");

async function getAllTasks() {
  const results = await collection("challenge").find({}).toArray();
  return results;
}

async function countAllTasks() {
  const amount = await collection("challenge").count();
  return amount;
}

async function countDoneTasks() {
  const amount = await collection("challenge").find({ done: false }).count();
  return amount;
}

exports.getAllTasks = getAllTasks;
exports.countAllTasks = countAllTasks;
exports.countDoneTasks = countDoneTasks;
