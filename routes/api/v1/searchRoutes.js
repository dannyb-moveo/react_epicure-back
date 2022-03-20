import express from "express";
const router = express.Router();

import { getSearchQuery } from "../../../controllers/searchController.js";

router.route("/").get(getSearchQuery);

export default router;
