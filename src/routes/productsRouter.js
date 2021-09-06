const express = require ('express') ;
const router = express.Router () ;
const path = require('path')
const multer = require('multer')
const productsController = require ('../controllers/productsController') ;
const {check}= require ('express-validator') ;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/images'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = file.originalname
      cb(null,uniqueSuffix)
    }
  })

  var upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
})
  const authMiddleware = require('../middleware/authMiddleware')
  const adminMiddleware = require('../middleware/adminMiddleware')



router.get('/',authMiddleware,productsController.get)
router.get ('/create',[authMiddleware,adminMiddleware], productsController.create)
router.get('/:id/',productsController.detail )
router.get('/:id/edit',[authMiddleware,adminMiddleware], productsController.edit)
router.put('/:id/edit',[authMiddleware,adminMiddleware] ,productsController.update)
router.post('/favorites',authMiddleware,productsController.addFavorite)
router.post('/',upload.single('image'),[
  check('name').not().isEmpty().withMessage ('Debes completar el Nombre del juego'),
  check('name').isLength({min :5}).withMessage ('El nombre debe contener minimo 5 caracteres'),

  check('description').isLength({min :20}).withMessage ('El nombre debe contener minimo 5 caracteres'),



], productsController.post)
router.delete('/:id/delete', [authMiddleware,adminMiddleware], productsController.delete)

module.exports = router