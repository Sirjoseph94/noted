import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { auth } from "express-openid-connect";
import api from "./routes";
import note from "./routes/notes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(morgan('combined'))
app.use(morgan("dev"));
app.use(helmet());
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
// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
//api routes
app.use("/api", api);
app.use("/api/note", note);

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
