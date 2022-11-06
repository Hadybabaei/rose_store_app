const express = require('express');
const categoryRoute = require('./api-v1/categoryRoute')
const productRoute = require('./api-v1/productRoute')
const articlesRoute = require('./api-v1/articlesRoute')
const usersRoute = require('./api-v1/usersRoute')
const router = express();

router.use('/v1',categoryRoute)
router.use('/v1',productRoute)
router.use('/v1',articlesRoute)
router.use('/v1',usersRoute)

module.exports = router
