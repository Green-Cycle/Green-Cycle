const router = require('express').Router();
const auth = require('../middleware/auth');

const {
  getProducts,
  addProduct,
  getProductByCategory,
  getFeaturedProducts,
  searchProductsByQuery,
} = require('../controllers/products');

//GET INITIAL PRODUTCTS
router.get('/', getProducts);

//ADD PRODUCTS
router.post('/new', addProduct);

// GET PRODUCTS BY CATEGORY
router.get('/category/:category', getProductByCategory);

// GET FEATURED PRODUCTS
router.get('/featured', getFeaturedProducts);

// SEARCH PRODUCTS
router.post('/search', searchProductsByQuery);

module.exports = router;
