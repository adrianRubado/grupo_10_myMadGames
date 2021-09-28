const express = require('express');
const router = express.Router ();
const apiController = require ('./apiController')

router.get ('/users',apiController.users);
router.get ('/users/:id',apiController.user);


module.exports = router