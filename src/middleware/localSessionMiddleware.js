const path = require("path")
const fs = require("fs")
const userFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));


function localSession (req, res, next) {  
    if ( req.session.user != "undefined")
    
    {   
        res.locals = req.session.user
        console.log("hola che")
    }
     next()};

    module.exports = localSession;