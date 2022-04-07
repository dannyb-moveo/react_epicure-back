import express from "express";
const router = express.Router();

import {
  createDish,
  getAllDishes,
  getSingleDish,
  updateDish,
  deleteDish,
} from "../../../controllers/dishesController.js";

import authenticateUser from "../../../middleware/auth.js";

router.route("/").post(authenticateUser, createDish).get(getAllDishes);
router
  .route("/:id")
  .get(getSingleDish)
  .patch(authenticateUser, updateDish)
  .delete(authenticateUser, deleteDish);

export default router;
