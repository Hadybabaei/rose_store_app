const express = require('express');
const categoriesController = require('../../controller/categoriesController');
const validator = require('../../middlewares/validator')
const validation = require('../../helper/validation');

const router = express.Router();

router.get('/categories',categoriesController.getCategories)
router.post('/categories',validation.categoriesValidator(),validator.validate,categoriesController.createCategories)
router.put('/categories/:id',categoriesController.updateCategory)
router.delete('/categories/:id',categoriesController.destroyCategory)

module.exports = router