import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import {
  handleCreateChef,
  handleGetAllChefs,
  handleGetSingleChef,
  handleUpdateChef,
  handleDeleteChef,
} from "../handlers/chefHandler.js";

const createChef = async (req, res) => {
  const { name, image, description } = req.body;
  if (!name || !image || !description) {
    throw new BadRequestError("Please provide all values");
  }
  const chef = await handleCreateChef(name, image, description);
  res.status(StatusCodes.CREATED).json({ chef });
};
const getAllChefs = async (req, res) => {
  const chefs = await handleGetAllChefs();
  res.status(StatusCodes.OK).json({ chefs, totalChefs: chefs.length });
};
const getSingleChef = async (req, res) => {
  const { id: chefId } = req.params;
  const chef = await handleGetSingleChef(chefId);
  if (!chef) {
    throw new NotFoundError(`No chef with id: ${chefId}`);
  }
  res.status(StatusCodes.OK).json({ chef });
};
const updateChef = async (req, res) => {
  const { id: chefId } = req.params;
  const { name, image, description } = req.body;
  if (!name || !image || !description) {
    throw new BadRequestError("Please provide all values");
  }
  const chef = await handleUpdateChef(chefId, req.body);
  if (!chef) {
    throw new NotFoundError(`No chef with id: ${chefId}`);
  }
  res.status(StatusCodes.OK).json({ chef });
};
const deleteChef = async (req, res) => {
  const { id: chefId } = req.params;
  const chef = await handleDeleteChef(chefId);
  if (!chef) {
    throw new NotFoundError(`No chef with id: ${chefId}`);
  }
  await chef.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! chef removed" });
};

export { createChef, getAllChefs, getSingleChef, updateChef, deleteChef };
