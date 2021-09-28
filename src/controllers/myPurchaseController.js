const fs = require('fs');
const path = require('path');
const db = require("../../database/models");
const Op = db.Sequelize.Op;

const   myPurchaseController ={
    view :  async(req,res)=> {

        const purchases =await db.User.findOne({
            include:[{association :'userCart'}],
            where: {
                id :req.session.user.id
            }
            
        })
        console.log(purchases);
     /*    const games=[];
        for (let i = 0; i < purchases.length; i++) {
            for (let index = 0; index < purchases[i]; index++) {
                const element = array[index];
                
            }
            const game =
             await db.Game.findOne ({


            })
            
        }




           const viewdata = {
            game:game
        
        } */
        
        



        res.render ('myPurchases');
        } 
        
    


}
module.exports= myPurchaseController ;