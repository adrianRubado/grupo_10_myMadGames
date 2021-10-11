const express = require ('express') ;
const router = express.Router () ;
const favController = require('../controllers/favController');
const authMiddleware = require('../middleware/authMiddleware');
router.get('/',authMiddleware,favController.view);
router.post('/',authMiddleware,favController.addFavorite);

module.exports = router