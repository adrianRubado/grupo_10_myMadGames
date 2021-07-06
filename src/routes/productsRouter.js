const express = require ('express') ;
const router = express.Router () ;
const productsController = require ('../controllers/productsController') ;

router.get('/',productsController.get)
router.get ('/create', productsController.create)
router.get('/:id/',productsController.detail )
router.get('/:id/edit',productsController.edit)
router.put('/:id/edit',productsController.update)
router.post('/create', productsController.post)
router.delete('/:id/delete',productsController.delete)

module.exports = router