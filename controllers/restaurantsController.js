import Restaurant from "../models/Restaurant.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import {
  handleCreateRestaurant,
  handleGetAllRestaurants,
  handleGetSingleRestaurant,
  handleUpdateRestaurant,
  handleDeleteRestaurant,
  handleGetChefsRestaurants,
} from "../handlers/restaurantsHandler.js";

const createRestaurant = async (req, res) => {
  const { name, image, chef } = req.body;
  if (!name || !image || !chef) {
    throw new BadRequestError("Please provide all values");
  }
  const restaurant = await handleCreateRestaurant(name, image, chef);
  res.status(StatusCodes.CREATED).json({ restaurant });
};
const getAllRestaurants = async (req, res) => {
  const restaurants = await handleGetAllRestaurants();
  res
    .status(StatusCodes.OK)
    .json({ restaurants, totalRestaurants: restaurants.length });
};
const getSingleRestaurant = async (req, res) => {
  const { id: restaurantId } = req.params;
  const restaurant = await handleGetSingleRestaurant(restaurantId);
  if (!restaurant) {
    throw new NotFoundError(`No restaurant with id: ${restaurantId}`);
  }
  res.status(StatusCodes.OK).json({ restaurant });
};
const updateRestaurant = async (req, res) => {
  const { id: restaurantId } = req.params;
  const { name, image, chef } = req.body;
  if (!name || !image || !chef) {
    throw new BadRequestError("Please provide all values");
  }
  const restaurant = await handleUpdateRestaurant(restaurantId, req.body);
  if (!restaurant) {
    throw new NotFoundError(`No restaurant with id: ${restaurantId}`);
  }
  res.status(StatusCodes.OK).json({ restaurant });
};
const deleteRestaurant = async (req, res) => {
  const { id: restaurantId } = req.params;
  const restaurant = await handleDeleteRestaurant(restaurantId);
  if (!restaurant) {
    throw new NotFoundError(`No restaurant with id: ${restaurantId}`);
  }
  await restaurant.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! restaurant removed" });
};

const getChefsRestaurants = async (req, res) => {
  const { id: chefId } = req.params;
  const restaurants = await handleGetChefsRestaurants(chefId);
  res
    .status(StatusCodes.OK)
    .json({ restaurants, totalRestaurants: restaurants.length });
};

export {
  createRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getChefsRestaurants,
};
