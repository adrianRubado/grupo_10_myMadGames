const fs = require ('fs') ;
const path = require ('path') ;
const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));

 const profileController = {

    profile: (req,res) => {

        user = req.session.user;

        const viewData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image
        }
        res.render('profile', viewData)
    }
}

module.exports = profileController