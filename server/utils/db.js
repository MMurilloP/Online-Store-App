const mongoose = require('mongoose');
require('dotenv').config();

/**
 * URL de conexión a la base de datos de MongoDB.
 * @type {string}
 */
const url = process.env.MY_MONGO_URI;

/**
 * Establece la opción "strictQuery" de Mongoose a "false".
 */
mongoose.set('strictQuery', false);

/**
 * Conecta la aplicación a la base de datos de MongoDB utilizando la URL especificada.
 * @param {string} url - URL de conexión a la base de datos.
 * @param {Object} options - Opciones de configuración de Mongoose.
 * @returns {mongoose.Connection} La conexión a la base de datos de MongoDB.
 */
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * Conexión a la base de datos de MongoDB.
 * @type {mongoose.Connection}
 */
const db = mongoose.connection;

/**
 * Manejador de eventos para errores de conexión a la base de datos de MongoDB.
 * @event db#error
 * @param {Error} error - El error que se produjo durante la conexión a la base de datos.
 */
db.on('error', error => console.log(error));

/**
 * Manejador de eventos para conexión exitosa a la base de datos de MongoDB.
 * @event db#open
 */
db.once('open', () => console.log('Conectado a MongoDB'));

module.exports = mongoose;
