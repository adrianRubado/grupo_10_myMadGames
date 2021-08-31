module.exports = function  (req,res,next){
    if(req.session.user.RoleId != 2){
        res.send('prohibido el acceso a usuarios.')
    }
    next()
}

