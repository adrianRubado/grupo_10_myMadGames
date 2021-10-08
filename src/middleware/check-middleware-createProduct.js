const {check} = require("express-validator");



module.exports = [
    check('name').notEmpty().withMessage('Debes completar el Nombre del juego').bail(),
    check('price').notEmpty().withMessage ('El nombre debe contener minimo 5 caracteres').bail(),
     check('description').isLength({min :20}).withMessage ('El nombre debe contener minimo 5 caracteres').bail(),
     check('genre').notEmpty().withMessage("Ingresa un género por favor").bail(),
     check('platform').notEmpty().withMessage("Inresa una plataforma válida por favor").bail()
  
  
  ]




