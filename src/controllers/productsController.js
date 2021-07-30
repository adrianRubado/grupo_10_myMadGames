const fs = require ('fs') ;
const path = require ('path') ;
const juegosFilePath = path.join(__dirname, '../database/games.json');
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