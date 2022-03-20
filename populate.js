import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Chef from "./models/Chef.js";
import Restaurant from "./models/Restaurant.js";
import Dish from "./models/Dish.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    // await Chef.deleteMany();
    // await Restaurant.deleteMany();
    // await Dish.deleteMany();

    const jsonProducts = JSON.parse(
      // await readFile(new URL("./mock-chefs.json", import.meta.url))
      // await readFile(new URL("./mock-restaurants.json", import.meta.url))
      await readFile(new URL("./mock-dishes.json", import.meta.url))
    );
    // await Chef.create(jsonProducts);
    // await Restaurant.create(jsonProducts);
    await Dish.create(jsonProducts);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
