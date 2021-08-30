const fs = require('fs');
const path = require('path');
/* const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8')); */

const db = require("../../database/models");



const productsController = {

    detail:async(req, res) => {
        const id = req.params.id

        const detail =  await db.Game.findByPk(id) ;



        const viewData = {
            game: detail
        }

       return res.render('products', viewData);
    },

    create: async (req, res) => {
        const genres = db.Genre.findAll()
        const viewData = {
            genres : genres
        }

        res.render('createGame',viewData);
    },
    edit:async(req, res) => {
        const id = req.params.id
        const detail =  await db.Product.findByPk(id) ;
        const viewData = {
            game: detail
        }

       return  res.render('editGame', viewData);
    },
    update:async (req, res) => {
        const id = req.params.id

       await db.Game.update({
            name: req.body.name,
            price: req.body.price,
            platform: req.body.price,
            description: req.body.description,
            link: req.body.link,
            image: req.body.image,
            requirements: req.body.requirements,
            genre: req.body.category
        },{
            where:{
                id:req.params.id
            }}
        )




       return  res.redirect("/products/" + id)


    },

    post: async(req, res) => {

       await db.Game.create({
            name: req.body.name,
            price: req.body.price,
            platform: req.body.price,
            description: req.body.description,
            link: req.body.link,
            image: req.body.image,
            requirements: req.body.requirements,
            genre: req.body.category
        })
      const games = await db.games.findAll()
        const viewData = {
            games: games
        }

        return res.render('index', viewData)
    },

    get:async(req, res) => {
       const games= await db.Game.findAll()


        return res.json(games)
    },

    delete: async (req, res) => {
        const id = req.params.id

        await db.Game.destroy({
         where:{
             id:req.params.id
         }
        })
        const updatedGames = await db.games.findAll()

        const viewData = {
            games: updatedGames
        }

       return res.render('index', viewData)
    }

}






module.exports = productsController