
 const createGamecontroller = {

    create: (req,res) => {


        res.render('createGame');
    },
    post :(req,res) => {
        res.redirect ('/')
    }
}






module.exports = createGamecontroller;