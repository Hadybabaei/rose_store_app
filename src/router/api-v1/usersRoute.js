const authController = require('../../controller/authController');
const { userUpdate } = require('../../controller/usersController');
const { isLoggined } = require('../../middlewares/auth_middleware');
const router = require('express').Router();

router.post('/register',authController.register)
router.post('/login',authController.login)
router.put('/users/:id',isLoggined,userUpdate)
router.post('/token',authController.refreshToken)

module.exports = router