import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import apiRoute from "./routes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT;

//api routes
app.use("/api", apiRoute);

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
