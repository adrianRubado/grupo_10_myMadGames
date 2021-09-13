const express = require ('express') ;
const router = express.Router () ;
const purchaseController = require('../controllers/purchaseController')
const authMiddleware = require('../middleware/authMiddleware')
const cartMiddleware = require('../middleware/cartMiddleware')



router.get ('/',authMiddleware,cartMiddleware, purchaseController.purchase) ;
router.get('/payment',authMiddleware,cartMiddleware,purchaseController.payment)
router.post('/payment',authMiddleware,cartMiddleware,purchaseController.pay)

router.get('/checkout',authMiddleware,cartMiddleware,purchaseController.checkout)


module.exports = router