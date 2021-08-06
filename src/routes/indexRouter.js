const express = require ('express') ;
const router = express.Router () ;
const indexController = require ('../controllers/indexController') ;
const auth = require('../middleware/auth')
const localSession = require('../middleware/localSessionMiddleware')
/* const cookieParser = require('cookie-parser')

router.use(cookieParser()) */



router.get ('/', localSession,indexController.index) ;


module.exports = router