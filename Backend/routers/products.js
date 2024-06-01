const router = require('express').Router();
const auth = require('../middleware/auth');

const {
  getProducts,
  addProduct,
  getProductByCategory,
  getFeaturedProducts,
  searchProductsByQuery,
  getProductByStore,
  getProductsById,
} = require('../controllers/products');

//GET INITIAL PRODUTCTS
router.get('/', getProducts);

//ADD PRODUCTS
router.post('/new', addProduct);

// GET PRODUCTS BY ID
router.get('/product/:id', getProductsById);

// GET PRODUCTS BY CATEGORY
router.get('/category/:category', getProductByCategory);

//GET PRODUCTS BY STORE
router.get('/company/:company', getProductByStore);

// GET FEATURED PRODUCTS
router.get('/featured', getFeaturedProducts);

// SEARCH PRODUCTS
router.post('/search', searchProductsByQuery);

module.exports = router;
