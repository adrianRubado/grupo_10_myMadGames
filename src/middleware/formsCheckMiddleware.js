/* 

module.exports = function (req,res,next) {


  check('firstName').not().isEmpty().withMessage ('Debes completar el Nombre') ,
  check('firstName').isLength({min :2}).withMessage ('El nombre debe contener minimo 2 caracteres'),

  check('lastName').not().isEmpty().withMessage ('Debes completar el apellido'),
  check('lastName').isLength({min :2}).withMessage ('El apellido debe contener minimo 2 caracteres'),

 
  

  check('password').not().isEmpty().withMessage ('Debes completar la password') ,
  check("password").(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/).withMessage ('La contraseña debe poseer mas de 8 caracteres, una minuscula, mayuscula y debe poseer un caracter numerico y especial'),   

  check('email').not().isEmpty().withMessage ('Debes completar el email'),
  check('email').isEmail(),

}
 */