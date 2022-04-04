import express from "express";
// import authenticateUser from "../../../middleware/auth.js"
import rateLimiter from "express-rate-limit";
const router = express.Router();

import { login, register } from "../../../controllers/authController.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

router.route("/register").post(register);
router.route("/login").post(login);

export default router;
