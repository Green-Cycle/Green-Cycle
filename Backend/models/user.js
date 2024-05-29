const mongoose = require('mongoose');

const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'User',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 4,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: 4,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  rua: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  complemento: {
    type: String,
  },
  bairro: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['vendedor', 'comprador'],
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
