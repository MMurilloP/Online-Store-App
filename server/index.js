const express = require("express");
require("dotenv").config();
const path = require("path");
require("./utils/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRouters = require("./routes/productRoutes");

app.use("/api/products", productRouters);

const port = process.env.PORT || 8001;

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.listen(port, () =>
  console.log(`Servidor corriendo en ${port} http://localhost:${port}`)
);
