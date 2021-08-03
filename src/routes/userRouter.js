const express = require ('express') ;
const router = express.Router () ;
const signUpController = require ('../controllers/signUpController') ;
const signInController = require ('../controllers/signInOutController') ;
const {check}= require ('express-validator') ;
const auth = require('../middleware/auth')
const multer = require('multer')
const path = require('path')


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

router.get ('/sign-up', signUpController.signUp) ;

router.post ('/sign-up',upload.single('image'), signUpController.createUser);


router.get ('/login', signInController.signIn) ;
router.post ('/login', [

    check('email', 'Please include a valid email').isEmail(),
    check('password', 'The password is required').exists()


 ], signInController.log);

 router.post('/logout',auth,signInController.logout)


module.exports = router