const jwt = require("jsonwebtoken");
const { CustomAPIError } = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");
const Quote = require("../models/Quote");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError(
      "Not so fast, cowboy. We need a username and password.",
      StatusCodes.BAD_REQUEST
    );
  }

  // just for now, until we know how to access IDs from mongoDB
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.status(StatusCodes.OK).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  const username = req.user.username;
  const quotes = await Quote.find({ addedByUsername: username });
  res
    .status(StatusCodes.OK)
    .json({ msg: `Welcome back, ${username}!`, data: { quotes } });
};

const addQuote = async (req, res) => {
  const quote = await Quote.create(req.body);
  res.status(201).json({ quote });
};

const getQuote = async (req, res, next) => {
  const { id: quoteID } = req.params;
  const quote = await Quote.findOne({ _id: quoteID });
  if (!quote) {
    return next(
      createCustomError(`No quote with id : ${quoteID}`, StatusCodes.NOT_FOUND)
    );
  }

  res.status(StatusCodes.OK).json({ quote });
};

const updateQuote = async (req, res, next) => {
  const { id: quoteID } = req.params;

  const quote = await Quote.findOneAndUpdate({ _id: quoteID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!quote) {
    return next(
      createCustomError(`No quote with id : ${quoteID}`, StatusCodes.NOT_FOUND)
    );
  }

  res.status(StatusCodes.OK).json({ quote });
};

const deleteQuote = async (req, res, next) => {
  const { id: quoteID } = req.params;
  const quote = await Quote.findOneAndDelete({ _id: quoteID });
  if (!quote) {
    return next(
      createCustomError(`No quote with id : ${quoteID}`, StatusCodes.NOT_FOUND)
    );
  }
  res.status(StatusCodes.OK).json({ quote });
};

module.exports = {
  login,
  dashboard,
  addQuote,
  getQuote,
  updateQuote,
  deleteQuote,
};
