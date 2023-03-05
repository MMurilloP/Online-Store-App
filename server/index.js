const express = require('express')

require('dotenv').config()

require('./utils/db.js');

// Inicializar la  app
console.log("App arrancada");


// concetar a la base de datos
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => console.log(`Serving on ${port} http://localhost:3000`));
