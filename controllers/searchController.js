import { handleGetSearchQuery } from "../handlers/searchHandler.js";
import { StatusCodes } from "http-status-codes";

const getSearchQuery = async (req, res) => {
  const { name } = req.query;

  const results = await handleGetSearchQuery(name);
  console.log(results);
  res.status(StatusCodes.OK).json({ results });
};

export { getSearchQuery };
