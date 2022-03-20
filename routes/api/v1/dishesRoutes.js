import express from "express";
const router = express.Router();

import {
  createDish,
  getAllDishes,
  getSingleDish,
  updateDish,
  deleteDish,
} from "../../../controllers/dishesController.js";

router.route("/").post(createDish).get(getAllDishes);
router.route("/:id").get(getSingleDish).patch(updateDish).delete(deleteDish);

export default router;
