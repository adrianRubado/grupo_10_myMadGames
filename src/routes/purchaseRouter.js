const express = require ('express') ;
const router = express.Router () ;
const purchaseController = require('../controllers/purchaseController')
const authMiddleware = require('../middleware/authMiddleware')



router.get ('/',authMiddleware, purchaseController.purchase) ;
router.get('/payment',authMiddleware,purchaseController.payment)
router.post('/payment',authMiddleware,purchaseController.pay)

router.get('/checkout',authMiddleware,purchaseController.checkout)


module.exports = router