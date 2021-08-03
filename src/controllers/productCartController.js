const fs = require ('fs') ;
const path = require ('path') ;



 const pcController = {

    carrito: (req,res) => {

        res.locals.user = req.session.user
        res.render('product-cart');
    }
}






module.exports = pcController