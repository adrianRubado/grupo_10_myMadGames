const db = require('../../database/models')



 const pcController = {

    carrito: (req,res) => {

        res.render('product-cart');
    },
    addItem : async (req,res) =>{
        const itemToAdd = req.body.add.split(',')

        await db.Cart.create({
            UserId: parseInt(itemToAdd[0]),
            GameId: parseInt(itemToAdd[1]),
            quantity: parseInt(itemToAdd[2]),
            price: parseInt(itemToAdd[3])

        })


    }
}






module.exports = pcController