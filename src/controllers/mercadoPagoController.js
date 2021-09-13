const db = require('../../database/models')

const mpController = {

    success: async(req,res) => {
        const purchase = await db.Purchase.create({
            UserId : req.session.user.id,
            status : 'Llega el lunes',
            total : 'totti'
        })


        await db.Cart.destroy({
            where :{
                UserId : req.session.user.id
            }
        })

        const viewData = {
            message : 'Gracias por su compra!!',
            color : 'success'

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