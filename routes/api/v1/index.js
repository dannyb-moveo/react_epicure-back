import express from "express";
const router = express.Router();

import chefsRouter from "./chefsRoutes.js";
import dishesRouter from "./dishesRoutes.js";
import restaurantRouter from "./restaurantsRoutes.js";
import searchRouter from "./searchRoutes.js";

router.use("/chefs", chefsRouter);
router.use("/dishes", dishesRouter);
router.use("/restaurants", restaurantRouter);
router.use("/search", searchRouter);

export default router;
