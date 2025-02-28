import * as UsersController from "../controllers/users";
import express from "express";
import { requiresAuth } from "../middlewares/auth";

const router = express.Router();

router.get("/", requiresAuth, (req, res, next) => {
  console.log("GET /api/users - Request Headers:", req.headers);
  console.log("GET /api/users - Session Data:", req.session);
  UsersController.getAuthenticatedUser(req, res, next);
});

router.post("/signup", (req, res, next) => {
  console.log("POST /api/users/signup - Request Body:", req.body);
  UsersController.signUp(req, res, next);
});

router.post("/login", (req, res, next) => {
  console.log("POST /api/users/login - Request Body:", req.body);
  UsersController.login(req, res, next);
});

router.post("/logout", (req, res, next) => {
  console.log("POST /api/users/logout - Request Headers:", req.headers);
  console.log("POST /api/users/logout - Session Data:", req.session);
  UsersController.logout(req, res, next);
});

export default router;
