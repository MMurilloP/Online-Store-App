const express = require("express");
require("dotenv").config();
require("./utils/db.js");

// Conexion db Mongo
const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRouters = require('./routes/productRoutes');



app.use('/api/products', productRouters);




app.listen(port, () =>
  console.log(`Servidor corriendo en ${port} http://localhost:${port}`)
);
