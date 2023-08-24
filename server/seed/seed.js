// SEED FILE CONNECT TO MONGODB ON ITS OWN
// *RUN  node seed/seed.js from the same level as the server or .env variables ===undefined

const mongoose = require('mongoose');

// Schema must match the seed
const Product = require('../models/Product');

//**PROTECT CREDS WITH THIS .ENV INSTEAD OF BRADS' DEFAULTJSON
require('dotenv').config();
const db = process.env.MY_MONGO_URI
console.log(db)

// STAND ALONE CONNECTION TO DB;
mongoose
  .connect(db)
  .then(() => console.log('mongodb SEED connection success'))
  .catch((error) => console.log(error));

// MOCK DATA
const seedProducts = [{
  "name": "Limón",
  "image": "https://images.pexels.com/photos/266346/pexels-photo-266346.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 2,
  "rating": 3,
  "__v": 0
},{
  "name": "Limas",
  "image": "https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 21,
  "rating": 5,
  "__v": 0
},{
  "name": "Fresas",
  "image": "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 5,
  "rating": 4,
  "__v": 0
},{
  "name": "Uvas",
  "image": "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 16,
  "rating": 2,
  "__v": 0
},{
  "name": "Tomate",
  "image": "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 12,
  "rating": 4,
  "__v": 0
},{
  "name": "Arandanos",
  "image": "https://images.pexels.com/photos/306800/pexels-photo-306800.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 13,
  "rating": 1,
  "__v": 0
},{
  "name": "Ciruelas",
  "image": "https://images.pexels.com/photos/248440/pexels-photo-248440.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 30,
  "rating": 4,
  "__v": 0
},{
  "name": "Sandía",
  "image": "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 8,
  "rating": 2,
  "__v": 0
},{
  "name": "Naranjas",
  "image": "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 3,
  "rating": 2,
  "__v": 0
},{
  "name": "Peras",
  "image": "https://images.pexels.com/photos/2095571/pexels-photo-2095571.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 12312434,
    "nombre": "Frutería 3",
    "direccion": "C/ 3 nº 3, Piso: 3º H"},
  "price": 5,
  "rating": 3,
  "__v": 0
},{
  "name": "Manzanas",
  "image": "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 98765432,
    "nombre": "Frutería 2",
    "direccion": "C/ 2 nº 2, Piso: 2º G"},
  "price": 4,
  "rating": 4,
  "__v": 0
},{
  "name": "Higos",
  "image": "https://images.pexels.com/photos/33791/fig-sliced-plate-wooden-table.jpg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 98765432,
    "nombre": "Frutería 2",
    "direccion": "C/ 2 nº 2, Piso: 2º G"},
  "price": 10,
  "rating": 5,
  "__v": 0
},{
  "name": "Melón",
  "image": "https://images.pexels.com/photos/1327734/pexels-photo-1327734.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 98765432,
    "nombre": "Frutería 2",
    "direccion": "C/ 2 nº 2, Piso: 2º G"},
  "price": 7,
  "rating": 3,
  "__v": 0
},{
  "name": "Papaya",
  "image": "https://images.pexels.com/photos/4113831/pexels-photo-4113831.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 98765432,
    "nombre": "Frutería 2",
    "direccion": "C/ 2 nº 2, Piso: 2º G"},
  "price": 16,
  "rating": 4,
  "__v": 0
},{
  "name": "Piña",
  "image": "https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 98765432,
    "nombre": "Frutería 2",
    "direccion": "C/ 2 nº 2, Piso: 2º G"},
  "price": 17,
  "rating": 4,
  "__v": 0
},{
  "name": "Mango",
  "image": "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 98765432,
    "nombre": "Frutería 2",
    "direccion": "C/ 2 nº 2, Piso: 2º G"},
  "price": 13,
  "rating": 2,
  "__v": 0
},{
  "name": "Cerezas",
  "image": "https://images.pexels.com/photos/1149017/pexels-photo-1149017.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 98765432,
    "nombre": "Frutería 2",
    "direccion": "C/ 2 nº 2, Piso: 2º G"},
  "price": 12,
  "rating": 2,
  "__v": 0
},{
  "name": "Melocotón",
  "image": "https://images.pexels.com/photos/4397786/pexels-photo-4397786.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 1234567,
    "nombre": "Frutería 1",
    "direccion": "C/ 1 nº 1, Piso: 1º F"},
  "price": 10,
  "rating": 5,
  "__v": 0
},{
  "name": "Coco",
  "image": "https://images.pexels.com/photos/3986706/pexels-photo-3986706.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 1234567,
    "nombre": "Frutería 1",
    "direccion": "C/ 1 nº 1, Piso: 1º F"},
  "price": 11,
  "rating": 3,
  "__v": 0
},{
  "name": "Pomelo",
  "image": "https://images.pexels.com/photos/7065187/pexels-photo-7065187.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 1234567,
    "nombre": "Frutería 1",
    "direccion": "C/ 1 nº 1, Piso: 1º F"},
  "price": 20,
  "rating": 3,
  "__v": 0
},{
  "name": "Kiwis",
  "image": "https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 1234567,
    "nombre": "Frutería 1",
    "direccion": "C/ 1 nº 1, Piso: 1º F"},
  "price": 15,
  "rating": 2,
  "__v": 0
},{
  "name": "Aguacate",
  "image": "https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "provider": {
    "cif": 1234567,
    "nombre": "Frutería 1",
    "direccion": "C/ 1 nº 1, Piso: 1º F"},
  "price": 20,
  "rating": 2,
  "__v": 0
},{
  "name": "Platanos",
  "image": "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600",
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
   "provider": {
    "cif": 1234567,
    "nombre": "Frutería 1",
    "direccion": "C/ 1 nº 1, Piso: 1º F"},
  "price": 14,
  "rating": 2,
  "__v": 0
}]

  
//   seeding function
const seedDB = async () => {
  // deletes any existing collections before seeding
  await Product.deleteMany({});
  await Product.insertMany(seedProducts);
  console.log('seedDB function ran');
};
//   call the function and it's promise to close this connection after seeding
seedDB().then(() => {
  console.log('seeds closed connection');
  mongoose.connection.close();
});

