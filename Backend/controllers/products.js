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
  const { name, cover, description, price, category, featured } = req.body;
  try {
    const product = await Product.create({
      name,
      cover,
      description,
      price,
      category,
      featured,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};
//GET PRODUCTS BY CATEGORY
module.exports.getProductByCategory = async (req, res) => {
  const {category} = req.body;
  try {
    const products = await Product.find({category: category });
    res.status(200).json(products);
  } catch {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};
