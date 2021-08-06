const jwt = require('jsonwebtoken');
module.exports = function (req,res,next){
    //Get the token from the headear

    const token = req.cookies.token
    console.log(token)

    if(!token ){
         res.redirect('/user/login')
    }
    try{
        const decoded = jwt.verify(token,'jwSecret')
        req.user = decoded.user
        req.token = token
        next()
    }catch(err){
        res.status(401).json({message: 'Token is not valid'})
    }
}