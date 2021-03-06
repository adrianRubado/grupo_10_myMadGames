const {validationResult} = require('express-validator');
const db = require('../../database/models')
const bcrypt= require ('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')






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
               verify : 1,
               RoleId: 1

           })
           const token = jwt.sign({email : req.body.email},process.env.JWT_SECURITY)




           const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mymadgamesDH@gmail.com',
                pass: process.env.MAIL_PASSWORD
            }
        });

          let mailOptions = {
            from: "remitente", // sender address
            to: req.body.email, // list of receivers
            subject: "Gracias por registrate!!!", // Subject line
            html: `<p>Gracias por registrate en mymadgames.</p><br><p>Para verificar tu cuenta cliquea este link :</p><a href=http://localhost:3002/user/verify?token=${token}>http://localhost:3002/user/verify?token=${token}</a>`, // plain text body

          };

          transporter.sendMail(mailOptions)
          console.log('mail enviado')

                 req.session.welcome = req.body.firstName

         return res.redirect('/user/welcome')

        } catch (error) {
            return res.status(500).json({error : error.message})

        }


    },

    welcome: (req,res) => {


         viewData = {
             user : req.session.welcome
         }
         req.session.destroy()


        res.render("welcome" , viewData)
    }
 }

module.exports = signUpController