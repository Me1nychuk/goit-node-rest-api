import express from "express";

import AuthController from "../controllers/usersControllers.js";

import validateBody from "../helpers/validateBody.js";
import { createUserSchema, loginUserSchema } from "../schemas/usersSchemas.js";

const router = express.Router();

router.post(
  "/register",
  validateBody(createUserSchema),
  AuthController.register
);
router.post("/login", validateBody(loginUserSchema), AuthController.login);
router.post("/logout", AuthController.logout);

export default router;
