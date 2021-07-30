const express = require ('express') ;
const router = express.Router () ;
const signUpController = require ('../controllers/signUpController') ;
const {check, validationResult}= require ('express-validator') ;

 

router.get ('/', signUpController.signUp) ;
router.post ('/', [
    check('first-name').not().isEmpty().withMessage ('Debes completar el Nombre') ,
    check('last-name').not().isEmpty().withMessage ('Debes completar el apellido'),
    check('password').isLength({min:5}).withMessage('La contraseña debe contar con mas de 8 caracteres'),
    check('email').isEmail()

 ], signUpController.createUser) ;


module.exports = router