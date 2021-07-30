const fs= require('fs') ;
const path = require ('path');
const {validationResult} = require('express-validator');
const userFilePath = path.join(__dirname, '../database/users.json');
const userr = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt= require ('bcryptjs') ;
const gravatar = require('gravatar');



const signUpController = {

      

    signUp: (req,res) => {


        res.render('sign-up');
    },
    createUser: (req,res) => {
        
         const errors =validationResult(req)
         if (!errors.isEmpty()){
            
            return res.status(400).json({errors:errors.array()}) ;
         }
         const newpassword = bcrypt.hashSync(req.body.password,10) ;
         const user= req.body;
         const avatar = gravatar.url (user.email,{protocol: 'http', s: '100'});
         user.avatar = avatar ;



         user.password =newpassword;

         if(userr.lenght == 0){
             user.id=1
         }else{

         user.id =userr[userr.length - 1].id + 1 
        }
         userr.push(user)
         fs.writeFileSync(userFilePath,JSON.stringify(userr,null,2))
     
        const viewData = {
            users : userr
        }
      return res.render('sign-in',viewData)    
      

    }
}






module.exports = signUpController