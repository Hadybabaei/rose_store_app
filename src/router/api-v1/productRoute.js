const express = require('express');
const productsController = require('../../controller/productsController');
const router = express();

router.post('/products',productsController.createProduct)
router.get('/products',productsController.getProducts)
router.get('/products/:id',productsController.getProductsById)

module.exports = router;