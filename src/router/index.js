const express = require('express');
const categoryRoute = require('./api-v1/categoryRoute')
const productRoute = require('./api-v1/productRoute')
const router = express();

router.use('/v1/',categoryRoute)
router.use('/v1',productRoute)

module.exports = router
