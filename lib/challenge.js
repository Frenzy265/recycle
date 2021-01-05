const { collection } = require("./database");
const ObjectID = require("mongodb").ObjectID;

async function getAllTasks() {
  return await collection("challenge").find({}).toArray();
}

async function countAllTasks() {
  return await collection("challenge").countDocuments();
}

async function countDoneTasks() {
  return await collection("challenge").find({ done: true }).count();
}

async function changeTaskStatus(id, done) {
  const newStatus = await collection("challenge").updateOne(
    { _id: ObjectID(id) },
    { $set: { done: !done } }
  );
  return newStatus;
}

exports.getAllTasks = getAllTasks;
exports.countAllTasks = countAllTasks;
exports.countDoneTasks = countDoneTasks;
exports.changeTaskStatus = changeTaskStatus;
