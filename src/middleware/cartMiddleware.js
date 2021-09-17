
const db = require('../../database/models') ;


async function cartMiddleware  (req, res, next)  {
    const cart = await db.Cart.findAll({
        where:{
            UserId:req.session.user.id
        }
    });

    if(cart.length == 0){
        res.redirect('http://localhost:3002/product-cart')
    }
    next()};

    module.exports = cartMiddleware;