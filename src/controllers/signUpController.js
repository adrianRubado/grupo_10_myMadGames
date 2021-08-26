const fs= require('fs') ;
const path = require ('path');
const {check,validationResult} = require('express-validator');
const bcrypt= require ('bcryptjs') ;
const db = require ('../../database/models');




const signUpController = {



    signUp: (req,res) => {


        res.render('sign-up');
    },

    createUser: async(req,res) => {

         const errors = validationResult(req)
         if (!errors.isEmpty()){

            return res.status(400).json({errors:errors.array()}) ;
         }





         const email= req.body.email;
         const user = db.User.findAll({
             limit:1,
             where:{
                 email:req.body.email
             }
         })
        

         if(user){
            res.status(400).json({errors : {message : 'User already exists'}})
         }

         const newpassword = bcrypt.hashSync(req.body.password,10) ;
       

          await db.User.create ({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            password:newpassword,
            email:req.body.email,
            bday:req.body.bday,
            image:"/images/" + req.file.originalname,
            role_id: 1
         })
        
      return res.redirect('/user/login/')


    
}



}


module.exports = signUpController