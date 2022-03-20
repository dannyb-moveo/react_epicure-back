import Restaurant from "../models/Restaurant.js";

const handleCreateRestaurant = async (name, image, chef) => {
  const restaurant = await Restaurant.create({ name, image, chef });
  return restaurant;
};

const handleGetAllRestaurants = async () => {
  const restaurants = await Restaurant.find({}).populate("chef", "name");
  return restaurants;
};

const handleGetSingleRestaurant = async (restaurantId) => {
  const restaurant = await Restaurant.findOne({ _id: restaurantId });
  return restaurant;
};

const handleUpdateRestaurant = async (restaurantId, fieldsToChange) => {
  const restaurant = await Restaurant.findOneAndUpdate(
    { _id: restaurantId },
    fieldsToChange,
    {
      new: true,
      runValidators: true,
    }
  );
  return restaurant;
};
const handleDeleteRestaurant = async (restaurantId) => {
  const restaurant = await Restaurant.findOne({ _id: restaurantId });
  return restaurant;
};

const handleGetChefsRestaurants = async (chefId) => {
  const restaurants = await Restaurant.find({ chef: chefId });
  return restaurants;
};

export {
  handleCreateRestaurant,
  handleGetAllRestaurants,
  handleGetSingleRestaurant,
  handleUpdateRestaurant,
  handleDeleteRestaurant,
  handleGetChefsRestaurants,
};
