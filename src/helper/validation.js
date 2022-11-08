const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
    
    registerValidator(){
        return check('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),
        check('lastname')
        .notEmpty()
        .withMessage('Lastname cannot be empty'),
        check('email')
        .isEmail()
        .notEmpty()
        .withMessage('Enter valid email'),
        check ('phonenumber')
        .notEmpty()
        .isNumeric()
        .isLength({min:10,max:10})
        .withMessage('Enter Valid Phone Number Without Zero-0'),
        check('password')
        .notEmpty()
        .isLength({min:6,max:12})
    }
    loginValidator(){
        return check('email')
        .isEmail()
        .notEmpty()
        .withMessage('Enter a valid format email'),
        check('password')
        .notEmpty()
        .withMessage('password field cant be empty')
    }

    articlesValidator(){
        return check('title')
        .notEmpty()
        .withMessage('Please Enter The Title ..')
    }

    categoriesValidator(){
        return check('name')
        .notEmpty()
        .withMessage('Name Required'),
        check('thumbnail')
        .notEmpty()
        .withMessage('Upload Thumbnail Please')
    }

    prductsValidator(){
        return check('name')
        .notEmpty()
        .withMessage('Name Required')
    }
}