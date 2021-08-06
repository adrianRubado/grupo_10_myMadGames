const express = require ('express') ;
const router = express.Router () ;
const indexController = require ('../controllers/indexController') ;

/* const cookieParser = require('cookie-parser')

router.use(cookieParser()) */



router.get ('/', indexController.index) ;


module.exports = router