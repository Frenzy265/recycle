require("dotenv").config();
const express = require("express");
const path = require("path");
const { getBoxes, getBoxByTitle, deleteBoxByTitle } = require("./lib/boxes");

const { connect } = require("./lib/database");

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
