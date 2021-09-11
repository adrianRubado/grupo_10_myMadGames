const db = require("../../database/models");
const purchaseController = {

    purchase: async(req,res) => {
        try {
        const games = []
        let g = null
        let cantidad = 0
        let precio = 0
        const cart = await db.Cart.findAll({
            where : {
                UserId : req.session.user.id
            }
        })


        for(let i = 0; i< cart.length; i++){
            g = await db.Game.findOne({
                where : {
                    id : cart[i].GameId
                }
            })
            games.push(g)
            cantidad += cart[i].quantity
            precio += g.price
        }


        const viewData = {

            cart : cart,
            games : games,
            quantity : cantidad,
            price : precio
        }






        res.render ('purchase',viewData);
        } catch (error) {
            res.json({errors : error.message})

        }
    },

    payment : async(req,res) =>{
        try {
            const games = []
            let g = null
            let cantidad = 0
            let precio = 0
            const cart = await db.Cart.findAll({
                where : {
                    UserId : req.session.user.id
                }
            })


            for(let i = 0; i< cart.length; i++){
                g = await db.Game.findOne({
                    where : {
                        id : cart[i].GameId
                    }
                })
                games.push(g)
                cantidad += cart[i].quantity
                precio += g.price
            }


            const viewData = {

                cart : cart,
                games : games,
                quantity : cantidad,
                price : precio
            }






            res.render ('payment',viewData);
            } catch (error) {
                res.json({errors : error.message})

            }
    }
}






module.exports = purchaseController