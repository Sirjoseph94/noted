import dotenv from "dotenv";
import express from "express";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
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

Sentry.init({
  dsn: "https://f3e0d843af784a4aa82ea6a67bdd2dac@o4504647613939712.ingest.sentry.io/4504647618068480",
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

const port = process.env.PORT;

//api routes

app.use("/api", users);
app.use("/api/note", notes);

app.get("/", (_req, res) => {
  res.send("Welcome to Noted API");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(_err: any, _req: any, res: any, _next: any) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.use("*", (_req, res) => {
  res.status(404).json({ Error: "Route not found" });
});

app.listen(port || 7000, () => {
  console.log(`listening on port ${port}`);
});
