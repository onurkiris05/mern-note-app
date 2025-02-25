import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import usersRoutes from "./routes/users";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import env from "./utils/validateEnv";
import MongoStore from "connect-mongo";
import { requiresAuth } from "./middlewares/auth";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: env.MONGO_CONNECTION_STRING,
    }),
  })
);

app.use("/api/notes", requiresAuth, notesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Page Not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  const errorMsg = isHttpError(error) ? error.message : "An unknown error occurred";
  const statusCode = isHttpError(error) ? error.status : 500;
  res.status(statusCode).json({ error: errorMsg });
});

export default app;
