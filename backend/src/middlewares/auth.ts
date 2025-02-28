import { RequestHandler } from "express";
import createHttpError from "http-errors";

export const requiresAuth: RequestHandler = (req, res, next) => {
  console.log("Auth Middleware - Session Data:", req.session);
  if (req.session.userId) {
    next();
  } else {
    console.log("Unauthorized: No userId in session");
    next(createHttpError(401, "User not authenticated"));
  }
};
