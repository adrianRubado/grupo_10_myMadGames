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
    log: async (req,res) => {
        try{
          const user =  userr.find(e=>e.email == req.body.email);
        if(!user){
            res.render('sign-in',{errors: {message:'Invalid Credentials'} })


        }
        const oldpassword = user.password ;
        const ismatch = await bcrypt.compareSync(req.body.password, oldpassword)

        if(!ismatch){
            res.render('sign-in',{errors: {message:'Invalid Credentials'} })
        }

      /*  const payload = {
            user:{
                id:user.id
            }
        }

         /* jwt.sign(payload,'jwSecret',(err,token)=>{
            if(err) {
                console.error(err.message)
            }
             res.cookie('token',token, {httpOnly : true})

            }) */
           // Deberiamos borrar la password de acá

            if(req.body.persist){
                res.cookie('persistSession', user.id, {maxAge:500000})
            }
            delete user.password
            req.session.user = user;
            res.redirect('/')

        }catch(err){
            res.status(500).json({errors : 'Server error'})
        }

        /* const viewData={
            games:juegos
        }
        res.render('index',viewData); */



   },

   logout : (req,res) =>{
        // res.clearCookie("token");
        res.clearCookie("persistSession");
        req.session.destroy()
        res.redirect('/')
        /* res.render('sign-in') */


    }
}






module.exports = signInController