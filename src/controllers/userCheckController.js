const fs= require('fs') ;
const path = require ('path');
const {check,validationResult} = require('express-validator');
const db = require('../../database/models') ;


const  userCheckController  ={
    
    
    verify: async(req,res) =>{
        
      
        
        const email =  req.header('userCheck');
        const user = await db.user.findOne ({

         where:{
             email:email
         }
        })
        if (user) {
            res.json ({error: true })

        }
        res.json ({error: false })

    }

   
}
module.exports = userCheckController 
 