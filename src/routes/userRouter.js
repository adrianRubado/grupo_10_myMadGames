const express = require ('express') ;
const router = express.Router () ;
const signUpController = require ('../controllers/signUpController') ;
const signInOutController = require ('../controllers/signInOutController') ;
const profileController = require('../controllers/profileController')
const {check}= require ('express-validator') ;
const multer = require('multer')
const path = require('path')
const guestMiddleware = require('../middleware/guestMiddleware')
const authMiddleware = require('../middleware/authMiddleware')


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

router.get ('/sign-up',guestMiddleware, signUpController.signUp) ;

router.post ('/sign-up',upload.single('image'),[
  check('firstName').not().isEmpty().withMessage ('Debes completar el Nombre') ,
  check('firstName').isLength({min :2}).withMessage ('El nombre debe contener minimo 2 caracteres'),

  check('lastName').not().isEmpty().withMessage ('Debes completar el apellido'),
  check('lastName').isLength({min :2}).withMessage ('El apellido debe contener minimo 2 caracteres'),

  check('password').not().isEmpty().withMessage ('Debes completar la password') ,
  check("password").matches(/^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),

  check('email').not().isEmpty().withMessage ('Debes completar el email'),
  check('email').isEmail(),



], signUpController.createUser);


router.get ('/login',guestMiddleware, signInOutController.signIn) ;
router.post ('/login', [
    check('email').not().isEmpty().withMessage ('Debes completar el email'),
    check('email', 'Please include a valid email').isEmail(),


    check('password', 'The password is required').exists()


 ], signInOutController.log);

 router.post('/logout',signInOutController.logout)

 router.get('/profile',authMiddleware,profileController.profile)

/* router.get ('/me', signInOutController.profile) */

module.exports = router