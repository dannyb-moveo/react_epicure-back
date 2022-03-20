import Chef from "../models/Chef.js";

const handleCreateChef = async (name, image, description) => {
  const chef = await Chef.create({ name, image, description });
  return chef;
};

const handleGetAllChefs = async () => {
  const chefs = await Chef.find({});
  return chefs;
};

const handleGetSingleChef = async (chefId) => {
  const chef = await Chef.findOne({ _id: chefId });
  return chef;
};

const handleUpdateChef = async (chefId, fieldsToChange) => {
  const chef = await Chef.findOneAndUpdate({ _id: chefId }, fieldsToChange, {
    new: true,
    runValidators: true,
  });
  return chef;
};
const handleDeleteChef = async (chefId) => {
  const chef = await Chef.findOne({ _id: chefId });
  return chef;
};

export {
  handleCreateChef,
  handleGetAllChefs,
  handleGetSingleChef,
  handleUpdateChef,
  handleDeleteChef,
};
