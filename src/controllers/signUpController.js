const fs= require('fs') ;
const path = require ('path');
const {check,validationResult} = require('express-validator');
const userFilePath = path.join(__dirname, '../database/users.json');
const userr = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt= require ('bcryptjs');




const signUpController = {



    signUp: (req,res) => {


        res.render('sign-up');
    },

    createUser: (req,res) => {

         const errors = validationResult(req)
         if (!errors.isEmpty()){

            return res.status(400).json({errors:errors.array()}) ;
         }





         const email= req.body.email;
         const user = userr.find((e =>e.email == email))

         if(user){
            res.status(400).json({errors : {message : 'User already exists'}})
         }

         const newUser = req.body



         const newpassword = bcrypt.hashSync(req.body.password,10) ;
         newUser.password = newpassword;


         if(userr.lenght == 0){
             newUser.id=1
         }else{

         newUser.id =userr[userr.length - 1].id + 1
        }
        newUser.image = "/images/" + req.file.originalname
         userr.push(newUser)
         fs.writeFileSync(userFilePath,JSON.stringify(userr,null,2))

        const viewData = {
            users : userr
        }
      return res.redirect('/user/login/')


    }
}






module.exports = signUpController