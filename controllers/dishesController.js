import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import {
  handleCreateDish,
  handleGetAllDishes,
  handleGetSingleDish,
  handleUpdateDish,
  handleDeleteDish,
  handleGetRestaurantsDishes,
} from "../handlers/dishesHandler.js";

const createDish = async (req, res) => {
  const { name, price, image, ingredients, restaurant } = req.body;
  if (
    !name ||
    !price ||
    !image ||
    !ingredients ||
    ingredients.length < 1 ||
    !restaurant
  ) {
    throw new BadRequestError("Please provide all values");
  }
  const dish = await handleCreateDish(req.body);
  res.status(StatusCodes.CREATED).json({ dish });
};
const getAllDishes = async (req, res) => {
  const dishes = await handleGetAllDishes();
  res.status(StatusCodes.OK).json({ dishes, totalDishes: dishes.length });
};
const getSingleDish = async (req, res) => {
  const { id: dishId } = req.params;
  const dish = await handleGetSingleDish(dishId);
  if (!dish) {
    throw new NotFoundError(`No dish with id: ${dishId}`);
  }
  res.status(StatusCodes.OK).json({ dish });
};
const updateDish = async (req, res) => {
  const { id: dishId } = req.params;
  const { name, price, image, ingredients, restaurant } = req.body;
  if (
    !name ||
    !price ||
    !image ||
    !ingredients ||
    ingredients.length < 1 ||
    !restaurant
  ) {
    throw new BadRequestError("Please provide all values");
  }
  const dish = await handleUpdateDish(dishId, req.body);
  if (!dish) {
    throw new NotFoundError(`No dish with id: ${dishId}`);
  }
  res.status(StatusCodes.OK).json({ dish });
};
const deleteDish = async (req, res) => {
  const { id: dishId } = req.params;
  const dish = await handleDeleteDish(dishId);
  if (!dish) {
    throw new NotFoundError(`No dish with id: ${dishId}`);
  }
  await dish.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! dish removed" });
};

const getRestaurantsDishes = async (req, res) => {
  const { id: restaurantId } = req.params;
  const dishes = await handleGetRestaurantsDishes(restaurantId);
  res.status(StatusCodes.OK).json({ dishes, totalDishes: dishes.length });
};

export {
  createDish,
  getAllDishes,
  getSingleDish,
  updateDish,
  deleteDish,
  getRestaurantsDishes,
};
