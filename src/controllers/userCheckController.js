
const db = require('../../database/models') ;


const  userCheckController  ={
    
    
    verify: async(req,res) =>{
        
      
        
       
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
        

    }

   
}
module.exports = userCheckController 
 