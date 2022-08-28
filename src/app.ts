import dotenv from "dotenv";
import express from "express";
// import api from "./routes";
import router from "./routes/usersRoute";

dotenv.config();

const app = express();
const port = process.env.PORT;

//api routes
// app.use("/api/", api);
// app.use("/*", )
app.use("/api", router);

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
