const { ModuleNode } = require('vite');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/user');


// CREATE USER
module.exports.createUser = async (req, res) => {
  // GET INFO FROM BODY
  const {
    name,
    email,
    password,
    confirmPassword,
    cpf,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    cep,
    telefone,
  } = req.body;
  try {
    //VERIFY PASSWORD CONFIRMATION
    if (password !== confirmPassword) {
      return res.status(400).send('Passwords do not match');
    }
    // CHECK FOR EXISTING USER
    const isUserInDatabse = await User.findOne({ email: email });

    // USER ALREADY IN DATBASE
    if (isUserInDatabse) {
      return res.status(400).send('User already in Database');
    }

    // NO USER, CREATE USER
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      cpf,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      cep,
      telefone,
      password: hash,
    });

    // THROW ERROR
    if (!newUser) {
      return res.status(400).send('Could not create User');
    }
    // NO ERROR, SEND USER
    return res.status(200).json(newUser);
  } catch (err) {
    message: 'Error creating User', err;
  }
};

// LOG IN
module.exports.login = async (req, res, next) => {
  try {
    
    const { email, password } = req.body;


    if (!(email && password)) {
      throw new BadRequest('All inputs are required');
    }

    const user = await User.findOne({ email }).select('+password');

    if (user && (await bcrypt.compare(password, user.password))) {
    
      const token = jwt.sign({ _id: user._id, email }, process.env.TOKEN_KEY, {
        expiresIn: '5h',
      });

      
      return res.status(200).json(token);
    }
    throw new Error('Invalid credentials');
  } catch (err) {
    next(err);
  }
};

// DELETE USER
module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    // FIND USER IN DATABASE
    const isUserInDatabse = await User.find({ _id: id });
    // USER NOT IN DATBASE
    if (!isUserInDatabse) {
      return res.status(400).send('User not in Database');
    }
    // USER FOUND, DELETE USER
    const deletedUser = await User.deleteOne({ _id: id });

    // THROW ERROR
    if (!deletedUser) {
      return res.status(400).send('Could not delete User');
    }
    // NO ERROR, SEND USER
    return res.status(200).json(deletedUser);
  } catch (err) {
    message: 'Error deleting User', err;
  }
};

// GET MY USER
module.exports.getMyProfile = async (req, res) => {
  const id = req.user._id;

  try {
    const myUser = await User.findOne({ _id: id });
    // USER NOT FOUND
    if (!myUser) {
      return res.status(404).send('User not in Database');
    }
    // USER FOUND SEND USER INFO
    return res.status(200).json(myUser);
  } catch (err) {
    message: 'Error getting user Profile, err';
  }
};

// CHANGE USER NAME
module.exports.updateProfileName = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  try {
    const myUser = await User.findByIdAndUpdate(
      { _id: id },
      { name },
      { new: true }
    );
    // USER NOT FOUND
    if (!myUser) {
      return res.status(404).send('User not in Database');
    }
    // UPDATE SUCCESSFUL, RETURN USER
    return res.status(200).json(myUser);
  } catch (err) {
    message: 'Error getting user Profile, err';
  }
};

// GET ALL USERS
module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    // USER NOT FOUND
    if (!users) {
      return res.status(404).send('User not in Database');
    }
    // USER FOUND SEND USER INFO
    return res.status(200).json(users);
  } catch (err) {
    message: 'Error getting user Profile, err';
  }
};
