const authController = require('../../controller/authController');
const { userUpdate } = require('../../controller/usersController');
const validation = require('../../helper/validation');
const { isLoggined } = require('../../middlewares/auth_middleware');
const { validate } = require('../../middlewares/validator');
const router = require('express').Router();

router.post('/register',validation.registerValidator(),validate,authController.register)
router.post('/login',authController.login)
router.put('/users/:id',isLoggined,userUpdate)
router.post('/token',authController.refreshToken)

module.exports = router