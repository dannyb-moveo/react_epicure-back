import express from "express";
const router = express.Router();

import {
  createRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../../../controllers/restaurantsController.js";

router.route("/").post(createRestaurant).get(getAllRestaurants);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .patch(updateRestaurant)
  .delete(deleteRestaurant);

export default router;
