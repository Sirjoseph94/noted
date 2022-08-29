import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import apiRoute from "./routes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(cookieParser());

const port = process.env.PORT;

//api routes
app.use("/api", apiRoute);

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
