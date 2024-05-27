const router = require('express').Router();
const auth = require('../middleware/auth');

const { getProducts, addProduct } = require('../controllers/products');

//GET INITIAL PRODUTCTS
router.get('/products', getProducts);

//ADD PRODUCTS
router.post('/products', addProduct);

module.exports = router;
