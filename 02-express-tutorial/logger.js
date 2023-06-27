const express = require("express");

const logger = (req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  console.log(new Date());
  next();
};

module.exports = logger;
