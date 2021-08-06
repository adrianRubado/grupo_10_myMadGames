const fs = require ('fs') ;
const path = require ('path') ;
const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));


 const profileController = {

    profile: (req,res) => {


        res.send('ya estas logueado')
    }
}

module.exports = profileController