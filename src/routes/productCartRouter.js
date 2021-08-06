const express = require ('express') ;
const router = express.Router () ;
const pcController = require ('../controllers/productCartController');
const authMiddleware = require('../middleware/authMiddleware')


router.get('/',authMiddleware, pcController.carrito) ;


module.exports = router