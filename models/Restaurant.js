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
      required: [true, "please provide chef"],
      ref: "Chef",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", RestaurantSchema);
