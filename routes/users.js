import express from "express";
import { getUsers, addUser, UpdateUser, deleteUser } from "../controllers/usersController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", UpdateUser);

router.delete("/:id", deleteUser);

export default router;