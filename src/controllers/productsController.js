const fs = require ('fs') ;
const path = require ('path');
const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));

let db = require("../../database/models");



 const productsController = {

    detail: (req,res) => {
        const id = req.params.id
        const detalle = juegos.find((e) => e.id == id)
        
        //     en detalle iría esto const detalle = db.Game.findByPk(id);
        const viewData = {
                game: detalle
        }

        res.render ('products',viewData);
    },

    create: (req,res) => {

        // aca hay que hacer db.Genre.findAll() // pero hay que cambiar si o si el ejs, como nos habia comentado Juan
        // alguno tiene que cambiar los campos de genero y hacerle un forEach de los datos que dejo mas abajo y comparte el controlador a la vista

        // db.Genre.findAll()
        // .then( function(genres){ 
        //    res.render("createGame", {genres :genres})
        //   })


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
        const id = req.params.id
        const updatedProduct = req.body
        const objIndex = juegos.findIndex(e => e.id == id)
        juegos[objIndex] = updatedProduct
        fs.writeFileSync(juegosFilePath,JSON.stringify(juegos))


        res.redirect("/products/"+id)


    },

    post :(req,res) => {
        const newGame = req.body
        newGame.id = juegos[juegos.length -1 ].id + 1
        newGame.image = "/images/" + req.file.originalname
        juegos.push(newGame)
        fs.writeFileSync(juegosFilePath,JSON.stringify(juegos,null,2))
        const viewData = {
            games : juegos
        }

        res.render('index',viewData)
    },

    get : (req,res) =>{

        // aca lo mismo find all de db.Games 
        res.send(juegos)
    },

    delete : (req,res) =>{
        const id = req.params.id
        const juegosActualizados = juegos.filter((e) => e.id != id)
        fs.writeFileSync(juegosFilePath,JSON.stringify(juegosActualizados,null,2))
        const viewData = {
            games : juegosActualizados
        }

        res.render('index',viewData)
    }

}






module.exports = productsController