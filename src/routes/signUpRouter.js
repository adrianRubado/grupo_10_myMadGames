const express = require ('express') ;
const router = express.Router () ;
const signUpController = require ('../controllers/signUpController') ;

router.get ('/', signUpController.signUp) ;
router.post ('/', signUpController.createUser) ;


module.exports = router