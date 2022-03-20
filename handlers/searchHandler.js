import Chef from "../models/Chef.js";
import Dish from "../models/Dish.js";
import Restaurant from "../models/Restaurant.js";

const handleGetSearchQuery = async (name) => {
  const results = [];
  console.log("outside if");
  if (name) {
    console.log("inside if");
    const newName = { $regex: name, $options: "i" };
    const promises = [
      Chef.find({ name: newName }),
      Dish.find({ name: newName }).populate("restaurant", "name"),
      Restaurant.find({ name: newName }).populate("chef", "name"),
    ];
    try {
      const queryResults = await Promise.all(promises);
      const resultsObj = {
        chefs: queryResults.at(0),
        dishes: queryResults.at(1),
        restaurants: queryResults.at(-1),
      };
      results.push(resultsObj);
    } catch (error) {
      console.log(error);
    }
  }

  return results;
};

export { handleGetSearchQuery };
