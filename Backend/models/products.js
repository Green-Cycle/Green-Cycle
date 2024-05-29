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
    // validate: {Bol
    //   validator(v) {
    //     return /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*/gm.test(
    //       v
    //     );
    //   },
    //   message: (props) => `${props.value} não é válido!`,
    // },
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
  }
});

module.exports = mongoose.model('Products', productsSchema);
