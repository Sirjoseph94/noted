import dotenv from "dotenv";
import express from "express";

import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import users from "./routes/user";
import notes from "./routes/notes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());

const port = process.env.PORT;

//api routes

// app.use("/users", router);
app.use("/api", users);
app.use("/api/note", notes);

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
