const express = require('express');
const categoriesController = require('../../controller/categoriesController');

const router = express.Router();

router.post('/categories',categoriesController.createCategories)

module.exports = router