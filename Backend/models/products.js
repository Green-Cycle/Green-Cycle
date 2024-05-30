const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validator = require('validator');

const productsSchema = new mongoose.Schema({
  company_id: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  cover: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Products', productsSchema);
