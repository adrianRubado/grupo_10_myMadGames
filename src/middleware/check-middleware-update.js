const { check } = require("express-validator");


module.exports = [  check('name').notEmpty().withMessage("El juego debe tener un nombre").bail(),
                    check('price').notEmpty().withMessage("El juego debe tener un precio").bail(),
                  check('genre').notEmpty().withMessage("Ingresa un género por favor").bail(),
                  check('platform').notEmpty().withMessage("Inresa una plataforma válida por favor").bail(),                
]