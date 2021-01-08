const { collection } = require("./database");

async function getAllTasks() {
  return await collection("challenge").find({}).toArray();
}

async function countAllTasks() {
  return await collection("challenge").countDocuments();
}

async function countDoneTasks() {
  return await collection("challenge").find({ done: true }).count();
}

async function changeTaskStatus(title, done) {
  const newStatus = await collection("challenge").updateOne(
    { title: title },
    { $set: { done: !done } }
  );
  return newStatus;
}

exports.getAllTasks = getAllTasks;
exports.countAllTasks = countAllTasks;
exports.countDoneTasks = countDoneTasks;
exports.changeTaskStatus = changeTaskStatus;
