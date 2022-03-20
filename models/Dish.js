import mongoose from "mongoose";

const DishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide dish name"],
      maxlength: 40,
    },
    price: {
      type: Number,
      required: [true, "Please provide dish price"],
    },
    image: {
      type: String,
      required: [true, "Please provide dish image"],
    },
    ingredients: {
      type: [String],
      required: [true, "Please provide dish ingredients"],
    },
    tags: {
      type: [String],
      default: [],
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      required: [true, "please provide restaurant"],
      ref: "Restaurant",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Dish", DishSchema);
