const fs = require('fs');
const path = require('path');
const db = require("../../database/models");

const Op = db.Sequelize.Op;

const   myPurchaseController ={
    view :  async(req,res)=> {

        const purchases =await db.Purchase.findAll({
           
            where: {
                UserId :req.session.user.id
            }
            
        })
        
        if (purchases) {
          
            let games=[];
            for (let i = 0; i < purchases.length; i++) {
                let products = await db.Product.findAll({
                    where:{
                        PurchaseId : purchases[i].id
                    }
                }) 
                
                for (let index = 0; index < products.length; index++) {
                    let game = {

                        game:await db.Game.findOne ({
                            where : {
                                id : products[index].GameId
                            }
                        }),
                        quantity: products[index].quantity,
                        price:products[index].price,
                        total:products[index].quantity * products[index].price,
                        purchaseId : products [index].PurchaseId
                    }
                   
                    
                    games.push (game)
                    
                }
            
        }
        const viewData = {
            games:games
            
        }
        console.log(games);
        res.render ('myPurchases',viewData);
    
    
    
    }else{
        const viewData ={
            games:false
        }
        res.render ('myPurchases',viewData);

        }
        
        
        
        
      
     
            }
        }
 

module.exports= myPurchaseController ;