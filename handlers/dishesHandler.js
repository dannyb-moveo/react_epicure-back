import Dish from "../models/Dish.js";

const handleCreateDish = async (reqBody) => {
  const dish = await Dish.create(reqBody);
  return dish;
};

const handleGetAllDishes = async () => {
  const dishes = await Dish.find({}).populate("restaurant", "name");
  return dishes;
};

const handleGetSingleDish = async (dishId) => {
  const dish = await Dish.findOne({ _id: dishId });
  return dish;
};

const handleUpdateDish = async (dishId, fieldsToChange) => {
  const dish = await Dish.findOneAndUpdate({ _id: dishId }, fieldsToChange, {
    new: true,
    runValidators: true,
  });
  return dish;
};
const handleDeleteDish = async (dishId) => {
  const dish = await Dish.findOne({ _id: dishId });
  return dish;
};

const handleGetRestaurantsDishes = async (restaurantId) => {
  const dishes = await Dish.find({ restaurant: restaurantId });
  return dishes;
};

export {
  handleCreateDish,
  handleGetAllDishes,
  handleGetSingleDish,
  handleUpdateDish,
  handleDeleteDish,
  handleGetRestaurantsDishes,
};
