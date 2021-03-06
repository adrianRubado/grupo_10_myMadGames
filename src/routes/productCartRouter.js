const express = require ('express') ;
const router = express.Router () ;
const pcController = require ('../controllers/productCartController');
const authMiddleware = require('../middleware/authMiddleware')


router.get('/',authMiddleware, pcController.carrito) ;
router.put('/',authMiddleware,pcController.update)
router.post ('/count',authMiddleware,pcController.count)
router.post('/',authMiddleware,pcController.addItem)
router.delete('/delete-game',authMiddleware,pcController.deleteItem)


module.exports = router