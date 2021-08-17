module.exports = function  (req,res,next){
    if(req.session.user.role != 'admin'){
        res.send('prohibido el acceso a usuarios.')
    }
    next()
}

