const {check} = require("express-validator");



module.exports = [
    check('name').not().isEmpty().withMessage ('Debes completar el Nombre del juego'),
    check('name').isLength({min :5}).withMessage ('El nombre debe contener minimo 5 caracteres'),
  
    check('description').isLength({min :20}).withMessage ('El nombre debe contener minimo 5 caracteres'),
  
  
  
  ]




