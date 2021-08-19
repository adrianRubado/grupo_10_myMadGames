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
    log:  (req,res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){

           return res.status(400).json({errors:errors.array()}) ;
        }


      /*  try{ */
          const user = userr.find(e=>e.email == req.body.email);
        if(user){
            const oldpassword = user.password ;
            console.log(user)
            console.log(req.body.password)
            console.log(oldpassword)
            const ismatch = bcrypt.compareSync(req.body.password, oldpassword)
            if(ismatch){
                if(req.body.persist){
                    res.cookie('persistSession', user.email, {maxAge:(1000 * 60) * 20})
                }

                /* delete user.password */
                req.session.user = user;
                return res.redirect('/')
            }



        }
        return res.render('sign-in',{errors: {message:'Invalid Credentials'} })





      /*  const payload = {
            user:{
                id:user.id
            }
        }

         /* jwt.sign(payload,'jwSecret',(err,token)=>{
            if(err) {
                console.error(err.message)
            }
             res.cookie('token',token, {httpsOnly : true, secure : true})

            }) */
           // Deberiamos borrar la password de acá



       /*  }catch(err){ */
            res.status(500).json({errors : 'Server error'})
        /* } */

        /* const viewData={
            games:juegos
        }
        res.render('index',viewData); */



   },

   logout : (req,res) =>{
        // res.clearCookie("token");
        if(req.cookies.persistSession){
            res.clearCookie("persistSession");
        }

        req.session.destroy()
        const viewData = {
            games : juegos
        }
        return res.redirect('/')
        /* res.render('sign-in') */


    },

    profile : (req,res) =>{
        res.render ('profile')
        


    }
}






module.exports = signInController