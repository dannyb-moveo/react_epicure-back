import express from "express";
const router = express.Router();

import authenticateUser from "../../../middleware/auth.js";

import chefsRouter from "./chefsRoutes.js";
import dishesRouter from "./dishesRoutes.js";
import restaurantRouter from "./restaurantsRoutes.js";
import searchRouter from "./searchRoutes.js";
import authRouter from "./authRoutes.js";

router.use("/chefs", authenticateUser, chefsRouter);
router.use("/dishes", authenticateUser, dishesRouter);
router.use("/restaurants", authenticateUser, restaurantRouter);
router.use("/search", authenticateUser, searchRouter);
router.use("/auth", authRouter);

export default router;
