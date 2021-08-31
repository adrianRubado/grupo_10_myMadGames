const db = require('../../database/models')



 const pcController = {

    carrito: (req,res) => {

        res.render('product-cart');
    },
    addItem : async (req,res) =>{
        const itemToAdd = req.body.add.split(',')

        const alreadyExists = await db.Cart.findOne({
            where: {
                UserId: parseInt(itemToAdd[0]),
                GameId : parseInt(itemToAdd[1])
            }

        })

        if(alreadyExists){
            await db.Cart.update({
                quantity: alreadyExists.quantity + parseInt(itemToAdd[2]),
                price: alreadyExists.price + (parseInt(itemToAdd[3]) * parseInt(itemToAdd[2]))

            },{
                where:{
                    id:alreadyExists.id
                }})
        }else{

        await db.Cart.create({
            UserId: parseInt(itemToAdd[0]),
            GameId: parseInt(itemToAdd[1]),
            quantity: parseInt(itemToAdd[2]),
            price: parseInt(itemToAdd[3] * parseInt(itemToAdd[2]))

        })
    }


    }
}






module.exports = pcController