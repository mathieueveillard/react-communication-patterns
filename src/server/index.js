const express = require("express");
const cors = require("cors");

let message = "";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.post("/message", (req, res) => {
  message = req.body.message;
  res.sendStatus(200);
});

app.get("/message", (_req, res) => {
  res.send({ message });
});

app.listen(PORT, () => {
  console.log(`Mocked API running at http://localhost:${PORT}`);
});
