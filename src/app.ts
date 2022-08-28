import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { auth } from "express-openid-connect";
import api from "./routes";
import note from "./routes/notes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT;
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: "ewTuvQ3jkdTthAi3DgaOI4jwcE2SC3EI",
  issuerBaseURL: "https://dev-c4ds8a6y.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

//api routes
app.use("/api", api);
app.use("/api/note", note);

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
