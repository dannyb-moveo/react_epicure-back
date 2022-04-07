import { UnauthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log(req.url);
  console.log(req.baseUrl);
  console.log(req.hostname);
  console.log(req.get("host"));
  console.log("hi");

  const authorizedUrls = [
    "/api/v1/chefs",
    "/api/v1/restaurants",
    "/api/v1/dishes",
    "/api/v1/chefs",
  ];

  // const url = authorizedUrls.find(url => url === )

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export default auth;
