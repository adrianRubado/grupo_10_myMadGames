const db = require ('../../database/models');
const sequelize = require ('sequelize') ;
const { where } = require('sequelize');



const apiController ={
    users :async(req,res) =>{
       const users = await db.User.findAll()
        
        
       
       
        const datos = users.map(usuario => [id,first_name,email,detail] = [usuario.id, usuario.first_name, usuario.email,`http://localhost:3002/api/users/${usuario.id}`])
        let array = []
        let count = users.length

        datos.forEach(element => {

            let usuario = {
                id : element[0],
                name :element [1],
                email :element [2],
                detail :element [3]
            }

            array.push (usuario)
        });



        let data ={
            count : count,
            users:array
        } 
       
        console.log(data);

        
        
        


        



           
      
       
    
        
        
       
       
       return res.json (data)

    },
    user : async(req,res) => {
        const user = await db.User.findOne({
            where :{
                id :req.params.id
            },
        attributes: {
            exclude: ['password', 'verify', 'RoleId','bday']
        }
    });
        
           
       
        
        
       
       
         
        
        return res.json (user);

    }
}
module.exports = apiController ;