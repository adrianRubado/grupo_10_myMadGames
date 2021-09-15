const express = require ('express') ;
const router = express.Router () ;
const mpController = require ('../controllers/mercadoPagoController');
const authMiddleware = require('../middleware/authMiddleware')


router.get('/success',authMiddleware, mpController.success) ;
router.get('/failure',authMiddleware,mpController.failure)
router.get('/pending',authMiddleware,mpController.pending)

module.exports = router