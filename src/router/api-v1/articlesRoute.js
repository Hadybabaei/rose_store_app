const express = require('express');
const articlesController = require('../../controller/articlesController');
const { isLoggined } = require('../../middlewares/auth_middleware');
const router = express();

router.get('/articles',isLoggined,articlesController.getArticles)
router.put('/articles/comments/:id',articlesController.commentCreate)
router.post('/articles',articlesController.createArticles)
router.delete('/articles',articlesController.destroyArticles)
router.put('/articles/:id',articlesController.updateArticles)

module.exports = router