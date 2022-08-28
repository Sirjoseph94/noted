import dotenv from "dotenv";
import express from "express";
import api from "./routes";
import { auth } from "express-openid-connect";

dotenv.config();
const app = express();
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

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
