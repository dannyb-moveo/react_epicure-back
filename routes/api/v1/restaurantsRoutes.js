import express from "express";
const router = express.Router();

import {
  createRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../../../controllers/restaurantsController.js";

import { getRestaurantsDishes } from "../../../controllers/dishesController.js";
import authenticateUser from "../../../middleware/auth.js";

router
  .route("/")
  .post(authenticateUser, createRestaurant)
  .get(getAllRestaurants);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .patch(authenticateUser, updateRestaurant)
  .delete(authenticateUser, deleteRestaurant);
router.route("/:id/dishes").get(getRestaurantsDishes);

export default router;
