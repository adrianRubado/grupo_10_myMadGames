const db = require ('../../database/models');
const sequelize = require ('sequelize') ;
const { where } = require('sequelize');



const apiController ={
    users :async(req,res) =>{
       const users = await db.User.findAll()
        const count = await users.length
       
       
       const usersName = await users.map (usuario => usuario.first_name);
       
       console.log(usersName);
        
        const data = {count,users}
       
       
       return res.json (data)

    },
    user : async(req,res) => {
        const user = await db.User.findByPk(req.params.id)
        
        return res.json (user);

    }
}
module.exports = apiController ;