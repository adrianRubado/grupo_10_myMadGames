const express = require ('express') ;
const router = express.Router () ;
const createGamecontroller = require ('../controllers/create-gameController') ;

router.get ('/', createGamecontroller.create) ;
router.post('/', createGamecontroller.post)

module.exports = router