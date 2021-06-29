const fs = require ('fs') ;
const path = require ('path') ;
const juegosFilePath = path.join(__dirname, '../database/juegos.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));





res.render ('index', {titulo:'My Mad'})




module.exports = indexController