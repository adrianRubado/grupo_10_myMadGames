const fs= require('fs') ;
const path = require ('path');
const {check,validationResult} = require('express-validator');
const userFilePath = path.join(__dirname, '../database/users.json');
const userr = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt= require ('bcryptjs') ;




const signUpController = {



    signUp: (req,res) => {


        res.render('sign-up');
    },
    createUser: (req,res) => {
        [
            check('first-name').not().isEmpty().withMessage ('Debes completar el Nombre') ,
            check('last-name').not().isEmpty().withMessage ('Debes completar el apellido'),
            check('password').isLength({min:5}).withMessage('La contraseña debe contar con mas de 8 caracteres'),
            check('email').isEmail()

         ]
         const errors =validationResult(req)
         if (!errors.isEmpty()){

            return res.status(400).json({errors:errors.array()}) ;
         }
         const newpassword = bcrypt.hashSync(req.body.password,10) ;
         const user= req.body;




         user.password =newpassword;

         if(userr.lenght == 0){
             user.id=1
         }else{

         user.id =userr[userr.length - 1].id + 1
        }
        user.image = "/images/" + req.file.originalname
         userr.push(user)
         fs.writeFileSync(userFilePath,JSON.stringify(userr,null,2))

        const viewData = {
            users : userr
        }
      return res.redirect('/user/login/')


    }
}






module.exports = signUpController