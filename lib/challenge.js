const { collection } = require("./database");

async function getAllTasks() {
  return await collection("challenge").find({}).toArray();
}

async function countAllTasks() {
  return await collection("challenge").countDocuments();
}

async function countDoneTasks() {
  return await collection("challenge").find({ done: false }).count();
}

exports.getAllTasks = getAllTasks;
exports.countAllTasks = countAllTasks;
exports.countDoneTasks = countDoneTasks;
