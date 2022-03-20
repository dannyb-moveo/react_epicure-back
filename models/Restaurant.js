import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide restaurant name"],
      maxlength: 40,
    },
    image: {
      type: String,
      required: [true, "Please provide restaurant image"],
    },
    chef: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please provide chef"],
      ref: "Chef",
    },
    signatureDish: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please provide signature dish"],
      ref: "Dish",
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", RestaurantSchema);
