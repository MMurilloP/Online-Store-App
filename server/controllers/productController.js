const ProductModel = require("../models/Product.js");

const getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
};

const getProductByID = async (req, res) => {
  const productID = req.params.id;

  try {
    const product = await ProductModel.findById(productID);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { getProducts,getProductByID };
