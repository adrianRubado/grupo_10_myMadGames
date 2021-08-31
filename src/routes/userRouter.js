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

  var upload = multer({ storage})

router.get ('/sign-up',guestMiddleware, signUpController.signUp) ;

router.post ('/sign-up',upload.single('image'),[
  check('firstName').not().isEmpty().withMessage ('Debes completar el Nombre') ,
  check('lastName').not().isEmpty().withMessage ('Debes completar el apellido'),
  check('password').isLength({min:5}).withMessage('La contraseña debe contar con mas de 8 caracteres'),
  check('email').isEmail()

], signUpController.createUser);


router.get ('/login',guestMiddleware, signInOutController.signIn) ;
router.post ('/login', [

    check('email', 'Please include a valid email').isEmail(),
    check('password', 'The password is required').exists()


 ], signInOutController.log);

 router.post('/logout',signInOutController.logout)

 router.get('/profile',authMiddleware,profileController.profile)

/* router.get ('/me', signInOutController.profile) */

module.exports = router