module.exports = function (req,res,next){
    res.locals.logged =  false

    if(req.session && req.session.user){
        res.locals.logged = true
        res.locals.image = req.session.user.image
        res.locals.user = req.session.user

    }
    next()
}
