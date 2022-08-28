import { Router } from "express";
// import express from 'express';
import {
  createUsers,
  getAllUsers,
  getSingleUsers,
  updateUsers,
  deleteUsers,
  loginUsers,
  logoutUsers,
} from "../controller/userController";
// const route = express.Router();

const router = Router();

router.get("/logout", logoutUsers);
router.get("/", getAllUsers);
router.get("/user/:id", getSingleUsers);
router.post("/signup", createUsers);
router.post("/login", loginUsers);

router.put("/update/:id", updateUsers);
router.delete("/delete/:id", deleteUsers);

export default router;
