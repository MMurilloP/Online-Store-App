const ProductModel = require("../models/Product.js");

const getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
};

module.exports = { getProducts };
