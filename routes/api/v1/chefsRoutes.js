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

router.route("/").post(createChef).get(getAllChefs);
router.route("/:id").get(getSingleChef).patch(updateChef).delete(deleteChef);
router.route("/:id/restaurants").get(getChefsRestaurants);

export default router;
