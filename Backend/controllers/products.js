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
  const { company, name, cover, description, price, category, featured } =
    req.body;
  try {
    const product = await Product.create({
      company,
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
  const { category } = req.params;
  console.log('Categoria recebida:', category);
  try {
    const products = await Product.find({ category: category });
    console.log('Produtos encontrados:', products);
    res.status(200).json(products);
  } catch {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};

//GET PRODUCTS BY STORE
module.exports.getProductByStore = async (req, res) => {
  const { company } = req.params;

  try {
    const products = await Product.find({ company: company });

    res.status(200).json(products);
  } catch {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};

//GET FEATURED PRODUCTS
module.exports.getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ featured: true }).limit(6);
    res.status(200).json(products);
  } catch {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};

// SEARCH PRODUCTS BY QUERY
module.exports.searchProductsByQuery = async (req, res) => {
  const { query } = req.body;
  try {
    const products = await Product.find({
      name: { $regex: new RegExp(query, 'i') },
    });
    res.status(200).json(products);
  } catch {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};

// SEARCH PRODUCTS BY id
module.exports.getProductsById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const products = await Product.find({ _id: id });
    res.status(200).json(products);
  } catch {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
};
