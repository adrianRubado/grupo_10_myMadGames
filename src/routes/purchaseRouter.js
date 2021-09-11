const express = require ('express') ;
const router = express.Router () ;
const purchaseController = require('../controllers/purchaseController')
const authMiddleware = require('../middleware/authMiddleware')



router.get ('/',authMiddleware, purchaseController.purchase) ;
router.get('/payment',authMiddleware,purchaseController.payment)


module.exports = router