import express from "express";
import { authUser, logoutUser, profileUser, registerUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(profileUser).put(updateUser);

export default router;
