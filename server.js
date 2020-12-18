require("dotenv").config();
const express = require("express");
const path = require("path");
const {
  getBoxes,
  getBoxByTitle,
  deleteBoxByTitle,
  setBoxByTitle,
  setItemByTitle,
} = require("./lib/boxes");

const { getAllResults, getResult } = require("./lib/searchbar");

const { connect } = require("./lib/database");
const {
  getAllTasks,
  countDoneTasks,
  countAllTasks,
} = require("./lib/challenge");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3010;

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("/api/boxes", async (request, response) => {
  try {
    const allBoxes = await getBoxes();
    if (!allBoxes) {
      response.status(404).send("You have no boxes yet");
      return;
    }
    response.json(allBoxes);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpectet error");
  }
});

app.get("/api/boxes/:title", async (request, response) => {
  const { title } = request.params;
  try {
    const box = await getBoxByTitle(title);
    if (!box) {
      response.status(404).send("This box doesn't exists");
      return;
    }
    response.send(box);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected error");
  }
});

app.delete("/api/boxes/:title", async (request, response) => {
  const { title } = request.params;
  try {
    const delBox = await deleteBoxByTitle(title);
    if (delBox.deletedCount === 0) {
      response.status(404).send("This box doesn't exists");
      return;
    }
    response.send(`Die Box ${title} wurde erfolgreich recycled!`);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected error");
  }
});

app.delete("/api/boxes/:title/:item", async (request, response) => {
  const { title } = request.params;
  const { item } = request.params;
  try {
    const delItem = await deleteBoxByTitle(title, item);
    if (delItem.deletedCount === 0) {
      response.status(404).send("This item doesn't exists");
      return;
    }
    response.send(`Das Item ${item} wurde erfolgreich recycled!`);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected error");
  }
});

app.post("/api/boxes/", async (request, response) => {
  const newBox = request.body;

  try {
    await setBoxByTitle(newBox.title, newBox.item);
    response.send(`Successfully create the new box ${newBox.title}`);
  } catch (error) {
    response.status(500).send("An unexpected error");
  }
});

app.post("/api/boxes/:title", async (request, response) => {
  const { title } = request.params;
  const newItem = request.body;
  try {
    const updateResult = await setItemByTitle(title, newItem.item);
    if (updateResult.modifiedCount === 0) {
      return response.status(404).send(`Box with ${title} not found`);
    }
    response.send(updateResult);
  } catch (error) {
    response.status(500).send("An unexpected error");
  }
});

app.get("/api/searchBar", async (request, response) => {
  try {
    const allResults = await getAllResults();
    if (!allResults) {
      response.status(404).send("There are no search results");
      return;
    }
    response.json(allResults);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpectet error");
  }
});

app.get("/api/searchBar/:title", async (request, response) => {
  const title = request.params;
  try {
    const result = await getResult(title);
    if (!result) {
      response.status(404).send("This item doesn't exists");
      return;
    }
    response.status(200).json(result);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpectet error");
  }
});

app.get("/api/challenge", async (request, response) => {
  try {
    const allTasks = await getAllTasks();
    if (!allTasks) {
      response.status(404).send("There are no challenge results");
      return;
    }
    response.json(allTasks);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected error");
  }
});

app.get("/api/challenge/statistic", async (request, response) => {
  try {
    const done = await countDoneTasks();
    const all = await countAllTasks();
    response.status(200).json({ done, all });
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected error");
  }
});

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  console.log("Connecting to database...");
  await connect(process.env.DB_URI, process.env.DB_NAME);
  console.log("Connectet to database!");

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

run();
