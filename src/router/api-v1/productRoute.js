const express = require('express');
const productsController = require('../../controller/productsController');
const validation = require('../../helper/validation');
const { validate } = require('../../middlewares/validator');
const router = express();

router.post('/products',validation.prductsValidator(),validate,productsController.createProduct)
router.get('/products',productsController.getProducts)
router.get('/products/:id',productsController.getProductsById)
router.put('/products/:id',productsController.updateProduct)
router.delete('/products/:id',productsController.destroyProduct)

module.exports = router;