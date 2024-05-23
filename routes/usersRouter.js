import express from "express";

import AuthController from "../controllers/usersControllers.js";

import validateBody from "../helpers/validateBody.js";
import { createUserSchema, loginUserSchema } from "../schemas/usersSchemas.js";

import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.post(
  "/register",
  validateBody(createUserSchema),
  AuthController.register
);
router.post("/login", validateBody(loginUserSchema), AuthController.login);
router.get("/logout", authMiddleware, AuthController.logout);
router.get("/current", authMiddleware, AuthController.current);

export default router;
