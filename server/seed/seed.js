// SEED FILE CONNECT TO MONGODB ON ITS OWN
// *RUN  node seed/seed.js from the same level as the server or .env variables ===undefined

const mongoose = require('mongoose');
// Schema must match the seed
const Product = require('../models/Product');

//**PROTECT CREDS WITH THIS .ENV INSTEAD OF BRADS' DEFAULTJSON
require('dotenv').config();
const db= "mongodb+srv://manuel1986:manuel1986@onlineshop.zowvnch.mongodb.net/?retryWrites=true&w=majority"
// const db = process.env.MONGO_URI;

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
      "image": "http://dummyimage.com/213x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Toyota",
      "price": 327,
      "rating": 1
    },
    {
      "name": "TL",
      "image": "http://dummyimage.com/191x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Acura",
      "price": 21,
      "rating": 2
    },
    {
      "name": "M5",
      "image": "http://dummyimage.com/188x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "BMW",
      "price": 31,
      "rating": 3
    },
    {
      "name": "Express 3500",
      "image": "http://dummyimage.com/206x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Chevrolet",
      "price": 1095,
      "rating": 2
    },
    {
      "name": "FF",
      "image": "http://dummyimage.com/163x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Ferrari",
      "price": 2690,
      "rating": 3
    },
    {
      "name": "FJ Cruiser",
      "image": "http://dummyimage.com/138x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Toyota",
      "price": 1013,
      "rating": 2
    },
    {
      "name": "ES",
      "image": "http://dummyimage.com/149x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Lexus",
      "price": 751,
      "rating": 4
    },
    {
      "name": "Azera",
      "image": "http://dummyimage.com/165x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Hyundai",
      "price": 12,
      "rating": 3
    },
    {
      "name": "Pajero",
      "image": "http://dummyimage.com/153x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mitsubishi",
      "price": 2010,
      "rating": 5
    },
    {
      "name": "Q",
      "image": "http://dummyimage.com/198x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Infiniti",
      "price": 1518,
      "rating": 4
    },
    {
      "name": "Accent",
      "image": "http://dummyimage.com/125x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Hyundai",
      "price": 351,
      "rating": 2
    },
    {
      "name": "Silverado 2500",
      "image": "http://dummyimage.com/167x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Chevrolet",
      "price": 1383,
      "rating": 2
    },
    {
      "name": "MKZ",
      "image": "http://dummyimage.com/108x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Lincoln",
      "price": 191,
      "rating": 4
    },
    {
      "name": "Charger",
      "image": "http://dummyimage.com/135x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Dodge",
      "price": 613,
      "rating": 1
    },
    {
      "name": "CL65 AMG",
      "image": "http://dummyimage.com/245x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mercedes-Benz",
      "price": 824,
      "rating": 3
    },
    {
      "name": "Xterra",
      "image": "http://dummyimage.com/117x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Nissan",
      "price": 2863,
      "rating": 2
    },
    {
      "name": "SL-Class",
      "image": "http://dummyimage.com/171x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mercedes-Benz",
      "price": 1902,
      "rating": 2
    },
    {
      "name": "Montero Sport",
      "image": "http://dummyimage.com/178x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mitsubishi",
      "price": 2564,
      "rating": 2
    },
    {
      "name": "Town Car",
      "image": "http://dummyimage.com/134x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Lincoln",
      "price": 940,
      "rating": 3
    },
    {
      "name": "G-Class",
      "image": "http://dummyimage.com/205x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mercedes-Benz",
      "price": 2000,
      "rating": 4
    },
    {
      "name": "Grand Am",
      "image": "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Pontiac",
      "price": 407,
      "rating": 5
    },
    {
      "name": "Phantom",
      "image": "http://dummyimage.com/206x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Rolls-Royce",
      "price": 1669,
      "rating": 4
    },
    {
      "name": "GTI",
      "image": "http://dummyimage.com/143x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Volkswagen",
      "price": 1293,
      "rating": 1
    },
    {
      "name": "Cavalier",
      "image": "http://dummyimage.com/107x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Chevrolet",
      "price": 2077,
      "rating": 4
    },
    {
      "name": "Rendezvous",
      "image": "http://dummyimage.com/185x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Buick",
      "price": 264,
      "rating": 2
    },
    {
      "name": "968",
      "image": "http://dummyimage.com/184x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Porsche",
      "price": 360,
      "rating": 1
    },
    {
      "name": "Scirocco",
      "image": "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Volkswagen",
      "price": 476,
      "rating": 4
    },
    {
      "name": "Passat",
      "image": "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Volkswagen",
      "price": 590,
      "rating": 5
    },
    {
      "name": "V50",
      "image": "http://dummyimage.com/243x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Volvo",
      "price": 1453,
      "rating": 2
    },
    {
      "name": "Alero",
      "image": "http://dummyimage.com/106x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Oldsmobile",
      "price": 2214,
      "rating": 5
    },
    {
      "name": "Sorento",
      "image": "http://dummyimage.com/159x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Kia",
      "price": 2859,
      "rating": 5
    },
    {
      "name": "S-Series",
      "image": "http://dummyimage.com/107x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Saturn",
      "price": 973,
      "rating": 4
    },
    {
      "name": "Ion",
      "image": "http://dummyimage.com/147x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Saturn",
      "price": 2851,
      "rating": 5
    },
    {
      "name": "Tacoma Xtra",
      "image": "http://dummyimage.com/219x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Toyota",
      "price": 2310,
      "rating": 5
    },
    {
      "name": "Grand Vitara",
      "image": "http://dummyimage.com/245x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Suzuki",
      "price": 1965,
      "rating": 5
    },
    {
      "name": "3500",
      "image": "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "GMC",
      "price": 817,
      "rating": 2
    },
    {
      "name": "Malibu",
      "image": "http://dummyimage.com/190x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Chevrolet",
      "price": 1965,
      "rating": 2
    },
    {
      "name": "Optima",
      "image": "http://dummyimage.com/157x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Kia",
      "price": 1518,
      "rating": 3
    },
    {
      "name": "3 Series",
      "image": "http://dummyimage.com/178x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "BMW",
      "price": 2231,
      "rating": 4
    },
    {
      "name": "900",
      "image": "http://dummyimage.com/178x100.png/cc0000/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Saab",
      "price": 2475,
      "rating": 2
    },
    {
      "name": "Mariner",
      "image": "http://dummyimage.com/135x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mercury",
      "price": 1527,
      "rating": 3
    },
    {
      "name": "Daewoo Lacetti",
      "image": "http://dummyimage.com/219x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Suzuki",
      "price": 1876,
      "rating": 4
    },
    {
      "name": "Sunbird",
      "image": "http://dummyimage.com/194x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Pontiac",
      "price": 1877,
      "rating": 3
    },
    {
      "name": "Savana 1500",
      "image": "http://dummyimage.com/178x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "GMC",
      "price": 181,
      "rating": 2
    },
    {
      "name": "Savana 2500",
      "image": "http://dummyimage.com/239x100.png/dddddd/000000",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "GMC",
      "price": 738,
      "rating": 2
    },
    {
      "name": "B-Series",
      "image": "http://dummyimage.com/195x100.png/ff4444/ffffff",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "brand": "Mazda",
      "price": 2238,
      "rating": 3
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

