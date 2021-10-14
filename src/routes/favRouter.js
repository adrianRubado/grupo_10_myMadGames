const express = require ('express') ;
const router = express.Router () ;
const favController = require ('../controllers/favoritesController') ;
const authMiddleware = require('../middleware/authMiddleware')

/* const cookieParser = require('cookie-parser')

router.use(cookieParser()) */



router.get ('/',authMiddleware,favController.myFavorites) ;
router.delete('/delete',authMiddleware,favController.deleteFavorite)


module.exports = router