const db = require('../../database/models')
const sequelize = require('sequelize')
const mercadopago = require ('mercadopago');

const buyNowController = {
    buy: async(req,res) => {

        const game = await db.Game.findByPk(req.body.game)

        const directBuy = {
            user: req.body.user,
            game: game,
            qty: req.body.qtyB,
            price: req.body.price
        }

        req.session.directBuy = directBuy;

        return res.render('direct-purchase', directBuy)
    },

    paymentNow: async(req,res) => {

        const paymentDirect = req.session.directBuy;

        const detailBuy = [
                {
                    title : paymentDirect.game.name,
                    unit_price : paymentDirect.game.price,
                    quantity : parseInt(paymentDirect.qty),
                    id : paymentDirect.game.id,
                }
        ]

        req.session.purchaseDetail = detailBuy;
        req.session.total = paymentDirect.game.price * parseInt(paymentDirect.qty)

        res.render('payment-direct', paymentDirect)
    },


    payNow: (req,res) =>{
        const payment = req.body.payment
        if(payment === 'MP'){
            res.redirect("/buy-now/checkoutDirect");
        }

        if(payment === 'Efe'){
            res.send('Compra en efectivo momentáneamente suspendida. Por favor utilice MercadoPago')
        }},

    checkoutDirect :  (req,res) =>{

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



module.exports = buyNowController