const fs = require('fs');
const path = require('path');
const db = require("../../database/models");
const game = require('../../database/models/game');
const Op = db.Sequelize.Op;

const   myPurchaseController ={
    view :  async(req,res)=> {

        const purchases =await db.User.findOne({
           
            where: {
                id :req.session.user.id
            }
            
        })
        if (purchases) {
            console.log(purchases);
            let games=[];
            for (let i = 0; i < purchases.length; i++) {
                let products = await db.Product.findAll({
                    where:{
                        PurchaseId : purchases[i].id
                    }
                }) 
                for (let index = 0; index < products.length; index++) {
                    let game = {

                        game:await db.Game.finOne ({
                            where : {
                                id : products[index].GameId
                            }
                        }),
                        quantity: products[index].quantity,
                        price:products[index].price,
                        total:products[index].quantity * products[index].price
                    }
                    
                    games.push (game)
                    
                }
            
        }
        const viewdata = {
            games:games
            
        }
    
    
    
    }else{
        const viewdata ={
            games:false
        }

        }
        const viewdata = {
            game:game
        
        }
        console.log(viewdata);
        res.render ('myPurchases',viewdata);
      
     
            }
        }
 

module.exports= myPurchaseController ;