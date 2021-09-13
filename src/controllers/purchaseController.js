const db = require("../../database/models");
const mercadopago = require ('mercadopago');
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
            precio += g.price * cart[i].quantity

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
            const detail = []
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
                let d = {
                    title : g.name,
                    unit_price : g.price,
                    quantity : cart[i].quantity,
                    id : g.id

                }
                detail.push(d)
                cantidad += cart[i].quantity
                precio += g.price * cart[i].quantity
            }




            const viewData = {

                cart : cart,
                games : games,
                quantity : cantidad,
                price : precio,

            }

            req.session.purchaseDetail = detail
            req.session.total = precio

            console.log(detail)






            res.render ('payment',viewData);
            } catch (error) {
                res.json({errors : error.message})

            }
    },

    pay : (req,res) =>{
        const payment = req.body.payment
        if(payment === 'MP'){
            res.redirect("/purchase-detail/checkout");
        }

        if(payment === 'Efe'){
            res.send('sape')
        }






    },

    checkout :  (req,res) =>{

         mercadopago.configure({
            access_token: process.env.ACCESS_TOKEN,

          });

          let preference = {
            items: req.session.purchaseDetail,
                // ...
                "back_urls": {
                      "success": "http://localhost:3002/mp/success",
                      "failure": "http://localhost:3002/mp/failure",
                      "pending": "http://localhost:3002/mp/pending"
                  },
                  "auto_return": "approved",
                // ...

          };

          mercadopago.preferences.create(preference)
          .then(function(r){
         res.redirect(r.response.sandbox_init_point)




          }).catch(function(error){
            console.log(error);
          });
    }



}






module.exports = purchaseController