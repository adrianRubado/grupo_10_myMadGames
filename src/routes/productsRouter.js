const express = require ('express') ;
const router = express.Router () ;
const path = require('path')
const multer = require('multer')
const productsController = require ('../controllers/productsController') ;
const {check}= require ('express-validator') ;
const updateGameMiddleware = require("../middleware/check-middleware-update")
const authMiddleware = require('../middleware/authMiddleware')
  const adminMiddleware = require('../middleware/adminMiddleware')
  const createValidation = require("../middleware/check-middleware-createProduct")


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



router.get('/',authMiddleware,productsController.get)
router.get ('/create',[authMiddleware,adminMiddleware], productsController.create)
router.get("/search/" , productsController.search)
router.get("/searchGenre",productsController.searchGenre)


router.get('/:id/',productsController.detail )



router.get('/:id/edit',[authMiddleware,adminMiddleware], productsController.edit)

router.put('/:id/edit',upload.single("image"), [updateGameMiddleware, authMiddleware,adminMiddleware], productsController.update);


router.post('/favorites',authMiddleware,productsController.addFavorite);

router.post('/cart-favorites',authMiddleware,productsController.cartFavorite)
router.post('/',upload.single('image'),createValidation, productsController.post)

router.delete('/:id/delete', [authMiddleware,adminMiddleware], productsController.delete)


router.post('/filter',productsController.filter)

module.exports = router