const express = require ('express') ;
const router = express.Router () ;
const signInController = require ('../controllers/signInController') ;

router.get ('/', signInController.signIn);
router.post ('/', signInController.log);


module.exports = router