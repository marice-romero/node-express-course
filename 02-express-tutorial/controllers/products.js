const { products } = require("../data.js");

function getProducts(req, res) {
  res.json(products);
}

function getProductsById(req, res) {
  const { productID } = req.params;
  const idToFind = parseInt(productID);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    return res.status(404).json({ message: "That product was not found." });
  }
  return res.json(product);
}

function queryProducts(req, res) {
  const { search, limit, price, feature } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (price) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.price <= price;
    });
  }
  if (feature) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.desc.includes(feature);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
}

module.exports = { getProducts, getProductsById, queryProducts };
