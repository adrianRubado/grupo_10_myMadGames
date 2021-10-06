const express = require('express');
const router = express.Router ();
const apiController = require ('./apiController');
const apiProductController = require ('./apiProductController') ;

router.get ('/users',apiController.users);
router.get ('/users/:id',apiController.user);

router.get ('/products',apiProductController.games);
router.get ('/products/:id',apiProductController.game);


module.exports = router