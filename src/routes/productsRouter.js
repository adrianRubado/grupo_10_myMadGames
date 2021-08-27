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
  const authMiddleware = require('../middleware/authMiddleware')
  const adminMiddleware = require('../middleware/adminMiddleware')



router.get('/',productsController.get)
router.get ('/create',[authMiddleware,adminMiddleware], productsController.create)
router.get('/:id/',productsController.detail )
router.get('/:id/edit',[authMiddleware,adminMiddleware], productsController.edit)
router.put('/:id/edit',[authMiddleware,adminMiddleware] ,productsController.update)
router.post('/',upload.single('image'), productsController.post)
router.delete('/:id/delete', [authMiddleware,adminMiddleware], productsController.delete)

module.exports = router