const router = require('express').Router();
const auth = require('../middleware/auth');

const {
  getProducts,
  addProduct,
  searchProduct,
} = require('../controllers/products');

//GET INITIAL PRODUTCTS
router.get('/products', getProducts);

//ADD PRODUCTS
router.post('/products', addProduct);

// //SEARCH PRODUCTS
// router.get('/products', searchProduct);

module.exports = router;
