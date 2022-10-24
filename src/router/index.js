const express = require('express');
const categoryRoute = require('./api-v1/categoryRoute')
const router = express();

router.use('/v1/',categoryRoute)

module.exports = router
