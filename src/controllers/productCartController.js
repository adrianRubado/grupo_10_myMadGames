const db = require('../../database/models')



 const pcController = {

    carrito: async(req,res) => {
        const cart = await db.Cart.findAll({
            where: {
                UserId : req.session.user.id

            }

        })
        const games = []
        if(cart.length>=1){
            for(let i = 0; i < cart.length;i++){
                let g = await db.Game.findOne({
                    where :{
                        id : cart[i].GameId
                    }
                })

                games.push(g)
            }
            const viewData = {
                cart : cart,
                games : games

            }

            return res.render('product-cart',viewData)
        }else{

            const viewData = {
                cart : cart,
                games : []

            }
            return res.render('product-cart',viewData)
        }



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

    res.redirect(`/products/${parseInt(itemToAdd[1])}`)
    },

    update : async (req,res) =>{
        const {gameId,price,quantity,userId} = req.body.data

       try {
        await db.Cart.update({
            UserId : userId,
            GameId : gameId,
            quantity : quantity,
            price : price

        },{
            where:{
                UserId :userId,
                GameId : gameId
            }})
        res.status(200).json('cart updated')
       } catch (error) {
        res.status(500).send('Server Error')
       }


    }
}






module.exports = pcController