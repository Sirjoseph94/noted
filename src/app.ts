import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Group 4 project!");
});

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
