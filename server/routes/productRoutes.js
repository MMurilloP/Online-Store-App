const express = require('express');

const productController = require("../controllers/productController")
const productRouters = express.Router();



productRouters.get('/', productController.getProducts)
productRouters.get('/:id', productController.getProductById)




module.exports = productRouters
