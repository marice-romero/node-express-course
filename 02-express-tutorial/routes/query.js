const express = require("express");
const router = express.Router();

const { queryProducts } = require("../controllers/products.js");

router.get("/", queryProducts);

module.exports = router;
