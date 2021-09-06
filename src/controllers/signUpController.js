const fs= require('fs') ;
const path = require ('path');
const {check,validationResult} = require('express-validator');
const db = require('../../database/models')
const bcrypt= require ('bcryptjs');




const signUpController = {



    signUp: (req,res) => {


        res.render('sign-up');
    },

    createUser: async (req,res) => {

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){

               return res.status(400).json({errors:errors.array()}) ;
            }

            const user = await db.User.findOne({
               where: {
                   email: req.body.email
               }

           })

            if(user){
               res.send(user)
            }
            const password = bcrypt.hashSync(req.body.password,10) ;

           await db.User.create({
               first_name: req.body.firstName,
               last_name: req.body.lastName,
               password: password,
               email: req.body.email,
               bday: req.body.bday,
               image: "/images/" + req.file.originalname,
               RoleId: '1'

           })

         return res.redirect('/user/login/')

        } catch (error) {
            return res.status(500).json({error : error.message})

        }


    }
}

module.exports = signUpController