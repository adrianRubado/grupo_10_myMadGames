const express = require ('express') ;
const router = express.Router () ;
const signInController = require ('../controllers/signInController') ;
const {check, validationResult}= require ('express-validator') ;

 

router.get ('/', signInController.signIn) ;
router.post ('/', [

    check('email', 'Please include a valid email').isEmail(),
    check('password', 'The password is required').exists()
    

 ], signInController.log) ;


module.exports = router