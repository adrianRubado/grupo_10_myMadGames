module.exports = function  (req,res,next){
    if(!req.session.user){
        res.redirect(req.url)
    }
    next()
}

