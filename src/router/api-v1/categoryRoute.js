const express = require('express');
const categoriesController = require('../../controller/categoriesController');

const router = express.Router();

router.get('/categories',categoriesController.getCategories)
router.post('/categories',categoriesController.createCategories)
router.put('/categories/:id',categoriesController.updateCategory)
router.delete('/categories/:id',categoriesController.destroyCategory)

module.exports = router