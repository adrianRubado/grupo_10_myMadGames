const db = require ('../../database/models');
const sequelize = require ('sequelize') ;
const { where } = require('sequelize');



const apiController ={
    users :async(req,res) =>{
       const users = await db.User.findAll()
       
       return res.json (users)

    },
    user : async(req,res) => {
        const user = await db.User.findByPk(req.params.id)
        
        return res.json (user);

    }
}
module.exports = apiController ;