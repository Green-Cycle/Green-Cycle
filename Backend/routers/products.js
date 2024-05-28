const router = require('express').Router();
const auth = require('../middleware/auth');

const { getProducts, addProduct } = require('../controllers/products');

//GET INITIAL PRODUTCTS
router.get('/', getProducts);

//ADD PRODUCTS
router.post('/', addProduct);

module.exports = router;
