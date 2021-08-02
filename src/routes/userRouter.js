const express = require ('express') ;
const router = express.Router () ;
const signUpController = require ('../controllers/signUpController') ;
const signInController = require ('../controllers/signInOutController') ;
const {check}= require ('express-validator') ;
const auth = require('../middleware/auth')



router.get ('/sign-up', signUpController.signUp) ;

router.post ('/sign-up', [
    check('first-name').not().isEmpty().withMessage ('Debes completar el Nombre') ,
    check('last-name').not().isEmpty().withMessage ('Debes completar el apellido'),
    check('password').isLength({min:5}).withMessage('La contraseña debe contar con mas de 8 caracteres'),
    check('email').isEmail()

 ], signUpController.createUser);


router.get ('/login', signInController.signIn) ;
router.post ('/login', [

    check('email', 'Please include a valid email').isEmail(),
    check('password', 'The password is required').exists()


 ], signInController.log);

 router.post('/logout',auth,signInController.logout)


module.exports = router