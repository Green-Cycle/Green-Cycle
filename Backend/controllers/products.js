const { ModuleNode } = require('vite');

const Product = require('../models/products');

//GET INITIAL PRODUCTS
module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};

//ADD PRODUCTS

module.exports.addProduct = async (req, res) => {
  const { name, cover, description, price, category } = req.body;
  try {
    const product = await Product.create({
      name,
      cover,
      description,
      price,
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};
