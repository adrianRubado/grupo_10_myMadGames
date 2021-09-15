const express = require ('express') ;
const router = express.Router () ;
const pcController = require ('../controllers/productCartController');
const authMiddleware = require('../middleware/authMiddleware')


router.get('/',authMiddleware, pcController.carrito) ;
router.put('/',authMiddleware,pcController.update)
router.post('/',authMiddleware,pcController.addItem)


module.exports = router