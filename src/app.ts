import dotenv from "dotenv";
import express from "express";
import api from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT;

//api routes
app.use("/api/", api);

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
