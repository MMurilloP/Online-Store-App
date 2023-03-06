// SEED FILE CONNECT TO MONGODB ON ITS OWN
// *RUN  node seed/seedPokemon.js from the same level as the server or .env variables ===undefined

const mongoose = require('mongoose');
const axios = require('axios');

// Schema must match the seed
const Product = require('../models/Product');

//**PROTECT CREDS WITH THIS .ENV INSTEAD OF BRADS' DEFAULTJSON
require('dotenv').config();
const db = process.env.MY_MONGO_URI

// STAND ALONE CONNECTION TO DB;
mongoose
  .connect(db)
  .then(() => console.log('mongodb SEED connection success'))
  .catch((error) => console.log(error));

// MOCK DATA
async function fetchPokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemon = response.data.results;
    
    const products = [];
    for (let i = 0; i < pokemon.length; i++) {
      const name = pokemon[i].name;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const imageUrl = response.data.sprites.front_default;
      
      products.push({
        name: name,
        image: imageUrl,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        brand: "Pokemon",
        price: Math.floor(Math.random() * 100) + 1,
        rating: Math.floor(Math.random() * 5) + 1
      });
    }
    
    return products;
  } catch (error) {
    console.error(error);
  }
}

//   seeding function
const seedDB = async () => {
    // Deletes any existing collections before seeding
    await Product.deleteMany({});
    
    // Fetches Pokemon data and saves to MongoDB
    const products = await fetchPokemon();
    await Product.insertMany(products);
    
    console.log('seedDB function ran');
  };
//   call the function and it's promise to close this connection after seeding
seedDB().then(() => {
  console.log('seeds closed connection');
  mongoose.connection.close();
});

