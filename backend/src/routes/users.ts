import * as UsersController from "../controllers/users";
import express from "express";

const router = express.Router();

router.post("/signup", UsersController.signUp);

export default router;
