import * as UsersController from "../controllers/users";
import express from "express";

const router = express.Router();

router.get("/", UsersController.getAuthenticatedUser);
router.post("/signup", UsersController.signUp);
router.post("/login", UsersController.login);
router.post("/logout", UsersController.logout);

export default router;
