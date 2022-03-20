import mongoose from "mongoose";

const ChefSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide chef name"],
      maxlength: 40,
    },
    image: {
      type: String,
      required: [true, "Please provide chef image"],
    },
    description: {
      type: String,
      required: [true, "Please provide chef description"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Chef", ChefSchema);
