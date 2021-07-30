const fs= require('fs') ;
const path = require ('path');
const {validationResult} = require('express-validator');
const userFilePath = path.join(__dirname, '../database/users.json');
const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));
const userr = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt= require ('bcryptjs') ;
const jwt = require('jsonwebtoken');

 const signInController = {

    signIn: (req,res) => {


        res.render('sign-in');
    },
    log: (req,res) => {
        try {
          const founduser = userr.find(e=>e.email == req.body.email) ;
          const oldpassword = founduser.password ;
        const ismatch = bcrypt.compareSync(req.body.password, oldpassword)
        

        if(!founduser || !ismatch){
            res.status (400).json ({errors: {message:'Invalid Credencial'} }) ;

        }
        const payload = {
            user:{
                id:user.id
            }
        }
         jwt.sign(payload,'jwsecret',(err,token)=>{
            if(err) {
                console.error(err.message)
            }
             res.json({token})})
            
        /* const viewData={
            games:juegos
        }
        res.render('index',viewData); */
    }catch(error) {
        res.status(500).json ({errors:{message: 'Server errors'}}) ;

    }
    
        
   }     
    }







module.exports = signInController