const fs = require ('fs') ;
const path = require ('path') ;
const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));


 const indexController = {

    index: (req,res) => {
        const viewData = {
                titulo: 'My Mad Games',
                games: juegos
        }

        res.render ('index',viewData);
    }
}






module.exports = indexController