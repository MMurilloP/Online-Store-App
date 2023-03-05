const mongoose = require ('mongoose');
require('dotenv').config()

const url= process.env.MONGO_URI
mongoose.set('strictQuery',false); 
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("Conectado a MongoDB")); 


module.exports = mongoose;

