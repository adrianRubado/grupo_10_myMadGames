const express = require ('express') ;
const router = express.Router () ;
const favController = require('../controllers/favController');
const authMiddleware = require('../middleware/authMiddleware')
router.post('/favorites',authMiddleware,favController.addFavorite)

module.exports = router