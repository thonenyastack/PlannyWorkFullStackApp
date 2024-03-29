import {
  register,
  login,
  updateUser,
  listUsers,
  getCurrentUser,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/authenticateUser.js";
import express from "express";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/listusers").get(authenticateUser, listUsers);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
