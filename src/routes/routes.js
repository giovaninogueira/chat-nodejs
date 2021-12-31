import express from "express";
import { userCreateController } from "../app/uses-cases/index.js";

const router = express.Router();

router.post("/register", userCreateController.handler.bind(userCreateController));

export { router };
