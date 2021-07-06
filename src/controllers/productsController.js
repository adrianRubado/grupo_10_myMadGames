const fs = require ('fs') ;
const path = require ('path') ;
const juegosFilePath = path.join(__dirname, '../database/juegos.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));




 const productsController = {

    detail: (req,res) => {
        const id = req.params.id
        const detalle = juegos.find((e) => e.id == id)
        const viewData = {
                game: detalle
        }

        res.render ('products',viewData);
    },

    create: (req,res) => {


        res.render('createGame');
    },
    edit: (req,res) => {
        const id = req.params.id
        const detalle = juegos.find((e) => e.id == id)
        const viewData = {
                game: detalle
        }

        res.render('editGame',viewData);
    },
    update: (req,res) => {


        res.send('alo');
    },

    post :(req,res) => {

        res.redirect ('/')
    },

    get : (req,res) =>{
        res.send(juegos)
    }

}






module.exports = productsController