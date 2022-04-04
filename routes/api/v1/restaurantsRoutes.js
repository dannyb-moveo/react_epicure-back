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

router.route("/").post(createRestaurant).get(getAllRestaurants);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .patch(updateRestaurant)
  .delete(deleteRestaurant);
router.route("/:id/dishes").get(getRestaurantsDishes);

export default router;
