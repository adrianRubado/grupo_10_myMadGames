const express = require ('express') ;
const router = express.Router () ;
const indexController = require ('../controllers/indexController') ;
const auth = require('../middleware/auth')
/* const cookieParser = require('cookie-parser')

router.use(cookieParser()) */



router.get ('/',auth, indexController.index) ;


module.exports = router