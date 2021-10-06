const express = require ('express') ;
const router = express.Router () ;
const buyNowController = require ('../controllers/buyNowController');
const authMiddleware = require('../middleware/authMiddleware')

router.post ('/',authMiddleware, buyNowController.buy)
router.get ('/payment-direct',authMiddleware, buyNowController.paymentNow)
router.post('/payment-direct',authMiddleware,buyNowController.payNow)

router.get('/checkoutDirect',authMiddleware,buyNowController.checkoutDirect)


module.exports = router