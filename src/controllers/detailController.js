const fs = require ('fs') ;
const path = require ('path') ;
const juegosFilePath = path.join(__dirname, '../database/juegos.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));




 const detailController = {

    detail: (req,res) => {
        const id = req.params.id
        const detalle = juegos.find((e) => e.id == id)
        const viewData = {
                game: detalle
        }

        res.render ('detail',viewData);
    }
}






module.exports = detailController