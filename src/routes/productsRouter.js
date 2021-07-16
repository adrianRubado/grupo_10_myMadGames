const express = require ('express') ;
const router = express.Router () ;
const path = require('path')
const multer = require('multer')
const productsController = require ('../controllers/productsController') ;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/images'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = file.originalname
      cb(null,uniqueSuffix)
    }
  })

  var upload = multer({ storage})



router.get('/',productsController.get)
router.get ('/create', productsController.create)
router.get('/:id/',productsController.detail )
router.get('/:id/edit',productsController.edit)
router.put('/:id/edit',productsController.update)
router.post('/',upload.single('image'), productsController.post)
router.delete('/:id/delete',productsController.delete)

module.exports = router