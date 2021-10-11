const express = require('express');
const router = express.Router ();
const apiController = require ('./apiController');
const apiProductController = require ('./apiProductController') ;
const apiGenreController = require("./apiGenreController");
const apiPlatformController = require("./apiPlatformController")

router.get ('/users',apiController.users);
router.get ('/users/:id',apiController.user);

router.get ('/products',apiProductController.games);
router.get ('/products/:id',apiProductController.game);

router.get("/genres", apiGenreController.genres)
router.get("/genres/:id", apiGenreController.gamesByGenre)

router.get("/platforms", apiPlatformController.platforms) 
router.get("/platforms/:id", apiPlatformController.gamesPlatform)




module.exports = router