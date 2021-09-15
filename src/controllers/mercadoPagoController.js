const db = require('../../database/models')
const productsController = require('./productsController')

const mpController = {

    success: async(req,res) => {



        const purchase = await db.Purchase.create({
            UserId : req.session.user.id,
            status : 'Llega el lunes',
            total : req.session.total
        })

        const products = req.session.purchaseDetail
        for(let i = 0;i<products.length;i++){
            await db.Product.create({
                PurchaseId : purchase.id,
                GameId : products[i].id,
                quantity : products[i].quantity,
                price : products[i].unit_price

            })
        }

        delete req.session.total
        delete req.session.purchaseDetail




        await db.Cart.destroy({
            where :{
                UserId : req.session.user.id
            }
        })

        const viewData = {
            message : 'Gracias por su compra!!',
            color : 'successs'

        }
        res.render('mercadopago',viewData)
},
    failure : (req,res) =>{
        const viewData = {
            message : 'Error de pago con el mensaje "Rechazado"',
            color : 'failure'
        }
        res.render('mercadopago',viewData)

    },
    pending : (req,res) =>{
        const viewData = {
            message : 'No se pudo completar la transacción. Use otra forma de pago.',
            color : 'pending'
        }
        res.render('mercadopago',viewData)

    }
}

module.exports = mpController