const express = require("express");
const router = express.Router();

const { getProducts, getProductsById } = require("../controllers/products.js");

router.get("/", getProducts);

router.get("/:productID", getProductsById);

module.exports = router;
