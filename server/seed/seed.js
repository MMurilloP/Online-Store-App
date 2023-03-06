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
const seedProducts = [
    {
      "name": "Electra",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Buick",
      "price": 212,
      "rating": 2
    },
    {
      "name": "4Runner",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Toyota",
      "price": 327,
      "rating": 1
    },
    {
      "name": "TL",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Acura",
      "price": 21,
      "rating": 2
    },
    {
      "name": "M5",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "BMW",
      "price": 31,
      "rating": 3
    },
    {
      "name": "Express 3500",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Chevrolet",
      "price": 1095,
      "rating": 2
    },
    {
      "name": "FF",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Ferrari",
      "price": 2690,
      "rating": 3
    },
    {
      "name": "FJ Cruiser",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Toyota",
      "price": 1013,
      "rating": 2
    },
    {
      "name": "ES",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Lexus",
      "price": 751,
      "rating": 4
    },
    {
      "name": "Azera",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Hyundai",
      "price": 12,
      "rating": 3
    },
    {
      "name": "Pajero",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mitsubishi",
      "price": 2010,
      "rating": 5
    },
    {
      "name": "Q",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Infiniti",
      "price": 1518,
      "rating": 4
    },
    {
      "name": "Accent",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Hyundai",
      "price": 351,
      "rating": 2
    },
    {
      "name": "Silverado 2500",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Chevrolet",
      "price": 1383,
      "rating": 2
    },
    {
      "name": "MKZ",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Lincoln",
      "price": 191,
      "rating": 4
    },
    {
      "name": "Charger",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Dodge",
      "price": 613,
      "rating": 1
    },
    {
      "name": "CL65 AMG",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mercedes-Benz",
      "price": 824,
      "rating": 3
    },
    {
      "name": "Xterra",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Nissan",
      "price": 2863,
      "rating": 2
    },
    {
      "name": "SL-Class",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mercedes-Benz",
      "price": 1902,
      "rating": 2
    },
    {
      "name": "Montero Sport",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mitsubishi",
      "price": 2564,
      "rating": 2
    },
    {
      "name": "Town Car",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Lincoln",
      "price": 940,
      "rating": 3
    },
    {
      "name": "G-Class",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mercedes-Benz",
      "price": 2000,
      "rating": 4
    },
    {
      "name": "Grand Am",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Pontiac",
      "price": 407,
      "rating": 5
    },
    {
      "name": "Phantom",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Rolls-Royce",
      "price": 1669,
      "rating": 4
    },
    {
      "name": "GTI",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Volkswagen",
      "price": 1293,
      "rating": 1
    },
    {
      "name": "Cavalier",
      "image": "http://dummyimage.com/114x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Chevrolet",
      "price": 2077,
      "rating": 4
    },
  ]
  
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

