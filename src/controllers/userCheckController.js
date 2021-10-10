
const db = require('../../database/models') ;
const nodeMailer = require('nodemailer')
const jwt = require('jsonwebtoken');
const bcrypt= require ('bcryptjs');
const { logout } = require('./signInOutController');
const  userCheckController  ={


    verifyMail: async(req,res) =>{




        try {
            const email =  req.body.data.email;
            
            
           
            const user = await db.User.findOne ({

            where:{
                email:email
            }
           })
           if (user) {
             
             
               res.json ({error: true,
             })

           }
           res.json ({error: false})



        } catch (error) {
            console.log (error.message)


        }


    },
    verifyLogin : async (req,res)=>{
    try {
       const user= await db.User.findOne({
            where: {email: req.body.data.email}
        })
        if (user) {
            const passwordUser = user.password;
           const checkPassword = bcrypt.compareSync(req.body.data.password,passwordUser)
           if (checkPassword) {
            res.json({log:true})
           }else{
               res.json({log:false})
           }
            
            
        }else{
            res.json({log:false})
        }
        
    } catch (error) {
        console.log(error.message);
        
    }
        
    },

    verifyAccount : async (req,res) =>{
        await db.User.update({
            verify : 2
        },{
            where:{
                email:req.email
            }})

            res.render('confirmedAccount')
    },

    changePass : (req,res) =>{
        res.render()
    },
    newPassMail : async function  (req,res) {



        res.render("newPassMail")
    },
    newPassGetForm: async function (req,res) {


       res.render("changePassword")

    },

    checkMailPassword : (req,res) =>{
        const mail = req.body.mail
        const token = jwt.sign({email : mail},process.env.JWT_SECURITY)

        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mymadgamesDH@gmail.com',
                pass: process.env.MAIL_PASSWORD
            }
        });

          let mailOptions = {
            from: "remitente", // sender address
            to: mail, // list of receivers
            subject: "Cambio de password", // Subject line
            html: `<p>Para resetear tu password cliquea este link :</p><a href=http://localhost:3002/user/reset-password?token=${token}>http://localhost:3002/user/reset-password?token=${token}</a>`, // plain text body

          };

          transporter.sendMail(mailOptions)
          console.log('mail enviado')

          res.redirect('newPassMail')



    },

    resetPassword : (req,res) =>{
        req.session.newPasswordEmail = req.email
        res.render('newPass')
    },

    changePassword : async (req,res) =>{
        const email = req.session.newPasswordEmail
        const password = req.body.password
        const repeatPassword = req.body.newPass
        console.log(email)
        console.log(password)
        console.log(repeatPassword)

        try {
            if(password == repeatPassword){
                const newPassword = bcrypt.hashSync(password,10) ;
                await db.User.update({
                    password : newPassword

                },{
                    where:{
                        email : email
                    }})

                    return res.redirect('/user/login')
            }
        } catch (error) {
            return res.send(error.message)
        }



    }






}
module.exports = userCheckController
