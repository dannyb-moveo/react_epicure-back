import express from "express";
const router = express.Router();

import {
  createChef,
  getAllChefs,
  getSingleChef,
  updateChef,
  deleteChef,
} from "../../../controllers/chefsController.js";

import { getChefsRestaurants } from "../../../controllers/restaurantsController.js";
import authenticateUser from "../../../middleware/auth.js";

router.route("/").post(authenticateUser, createChef).get(getAllChefs);
router
  .route("/:id")
  .get(getSingleChef)
  .patch(authenticateUser, updateChef)
  .delete(authenticateUser, deleteChef);
router.route("/:id/restaurants").get(getChefsRestaurants);

export default router;
