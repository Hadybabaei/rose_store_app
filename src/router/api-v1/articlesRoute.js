const express = require('express');
const articlesController = require('../../controller/articlesController');
const { isLoggined } = require('../../middlewares/auth_middleware');
const validation = require('../../helper/validation')
const validator = require('../../middlewares/validator')
const router = express();

router.get('/articles',isLoggined,articlesController.getArticles)
router.put('/articles/comments/:id',articlesController.commentCreate)
router.post('/articles',validation.articlesValidator(),validator.validate,articlesController.createArticles)
router.delete('/articles',articlesController.destroyArticles)
router.put('/articles/:id',articlesController.updateArticles)

module.exports = router