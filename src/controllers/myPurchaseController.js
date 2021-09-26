const fs = require('fs');
const path = require('path');
const db = require("../../database/models");
const Op = db.Sequelize.Op;

const   myPurchaseController ={
    view :  (req,res)=> {
        res.render ('myPurchases')

      
        } 
    


}
module.exports= myPurchaseController ;