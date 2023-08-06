const jwt = require("jsonwebtoken");
const { CustomAPIError } = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError(
      "Uh uh uh, you didn't say the magic word!",
      StatusCodes.UNAUTHORIZED
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError(
      "You don't even go here!",
      StatusCodes.UNAUTHORIZED
    );
  }
};

module.exports = authenticationMiddleware;
