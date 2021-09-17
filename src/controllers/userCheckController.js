
const db = require('../../database/models') ;


const  userCheckController  ={


    verifyMail: async(req,res) =>{




        try {
            const email =  req.body.data.email;
            console.log(email)
            const user = await db.User.findOne ({

            where:{
                email:email
            }
           })
           if (user) {
               res.json ({error: true })

           }
           res.json ({error: false })



        } catch (error) {
            console.log (error.message)


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
    }


}
module.exports = userCheckController
