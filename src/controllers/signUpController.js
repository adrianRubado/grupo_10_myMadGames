const fs= require('fs') ;
const path = require ('path');
const {check,validationResult} = require('express-validator');
<<<<<<< HEAD
const userFilePath = path.join(__dirname, '../database/users.json');
const userr = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt= require ('bcryptjs');
=======
const bcrypt= require ('bcryptjs') ;
const db = require ('../../database/models');
>>>>>>> d3ddae703d318f44783d4f557e304a8c3c4ad1b3




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