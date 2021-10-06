const express = require ('express') ;
const router = express.Router () ;
const path = require('path');
const multer = require('multer')
const myPurchaseController = require ('../controllers/myPurchaseController');
const authMiddleware = require('../middleware/authMiddleware')
router.get('/',authMiddleware,myPurchaseController.view) ;

module.exports = router ;