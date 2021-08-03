const fs= require('fs') ;
const path = require ('path');
const {validationResult} = require('express-validator');
const userFilePath = path.join(__dirname, '../database/users.json');
const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));
const userr = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt= require ('bcryptjs') ;
const jwt = require('jsonwebtoken');
const config = require('config');



 const signInController = {

    signIn: (req,res) => {


        res.render('sign-in');
    },
    log: (req,res) => {
        try{
          const user = userr.find(e=>e.email == req.body.email) ;
          const oldpassword = user.password ;
          const ismatch = bcrypt.compareSync(req.body.password, oldpassword)


        if(!user){
            res.status (400).json ({errors: {message:'Invalid Credentials'} }) ;

        }

        if(!ismatch){
            res.status (400).json ({errors: {message:'Invalid Credentials'} }) ;
        }

        const payload = {
            user:{
                id:user.id
            }
        }

         jwt.sign(payload,'jwSecret',(err,token)=>{
            if(err) {
                console.error(err.message)
            }
             res.cookie('token',token, {httpOnly : true})

            req.session.user = user; // Deberiamos borrar la password de acá
            res.locals.user = req.session.user;
            res.redirect('/')})

        }catch(err){
            res.status(500).json({errors : 'Server error'})
        }

        /* const viewData={
            games:juegos
        }
        res.render('index',viewData); */



   },

   logout : (req,res) =>{
        res.clearCookie("token");

        res.redirect('/user/login')
        /* res.render('sign-in') */


    }
}






module.exports = signInController