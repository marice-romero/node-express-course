const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) =>
  res
    .status(StatusCodes.NOT_FOUND)
    .send("The page you're looking for does not exist");

module.exports = notFound;
