const mongoose = require('mongoose');
require('dotenv').config();

const { MONGO_URI } = process.env;

module.exports = async function connectDatabase() {
  await mongoose.connect(MONGO_URI, {
    dbName: 'ecocommerce',
  });
  console.log('Database connected');
};
