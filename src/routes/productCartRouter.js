const express = require ('express') ;
const router = express.Router () ;
const pcController = require ('../controllers/productCartController') ;
const auth = require('../middleware/auth')

router.get('/', pcController.carrito) ;


module.exports = router