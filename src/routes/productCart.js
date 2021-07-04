const express = require ('express') ;
const router = express.Router () ;
const pcController = require ('../controllers/productCartController') ;

router.get('/', pcController.carrito) ;


module.exports = router