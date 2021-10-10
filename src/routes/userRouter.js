const express = require ('express') ;
const router = express.Router () ;
const signUpController = require ('../controllers/signUpController') ;
const signInOutController = require ('../controllers/signInOutController') ;
const profileController = require('../controllers/profileController');
const userCheckController = require ('../controllers/userCheckController') ;
const {check}= require ('express-validator') ;
const multer = require('multer')
const path = require('path')
const guestMiddleware = require('../middleware/guestMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
const authToken = require('../middleware/authToken')


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


 //EXPRESION REGULAR
var expre =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/   ;

router.post ('/sign-up',upload.single('image'),[
  check('firstName').not().isEmpty().withMessage ('Debes completar el Nombre') ,
  check('firstName').isLength({min :2}).withMessage ('El nombre debe contener minimo 2 caracteres'),

  check('lastName').not().isEmpty().withMessage ('Debes completar el apellido'),
  check('lastName').isLength({min :2}).withMessage ('El apellido debe contener minimo 2 caracteres'),




  check('password').not().isEmpty().withMessage ('Debes completar la password') ,
  check("password").isLength({min : 8}).withMessage ('La contraseña debe poseer al menos 8 caracteres'),
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

router.post('/sign-up/check',guestMiddleware,userCheckController.verifyMail) ; //Corroboramos desde el lado del Front si un Email es repetido
router.post('/sign-in/check',guestMiddleware,userCheckController.verifyLogin);


router.get("/welcome", signUpController.welcome)
router.get('/verify',authToken,userCheckController.verifyAccount)


/* router.get('/change-password',userCheckController.changePass) */

router.get("/change-password", userCheckController.newPassGetForm );
router.post('/change-password',userCheckController.checkMailPassword)
router.get("/newPassMail", userCheckController.newPassMail);
router.get('/reset-password',authToken,userCheckController.resetPassword)
router.post('/reset-password',userCheckController.changePassword)


module.exports = router