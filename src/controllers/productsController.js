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

        if(req.session && req.session.user){
            return res.render('products', viewData);
        }else{
            return res.render('productsNotLogged', viewData);
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
        const detail =  await db.Game.findByPk(id) ;
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

        const genre = await db.Genre.findOne({
            where: {
                name: req.body.genre
            }

        })

        const platform = await db.Platform.findOne({
            where: {
                name: req.body.platform
            }

        })

        await db.Game.create({
            name: req.body.name,
            price: req.body.price,
            PlatformId: platform.id,
            description: req.body.description,
            link: req.body.link,
            category : 2,
            image: "/images/" + req.file.originalname,
            requirements: req.body.requirements,
            GenreId: genre.id
        })
      const games = await db.Game.findAll()
      const genres = await db.Genre.findAll()
        const viewData = {
            games: games,
            genres : genres
        }

        return res.render('index', viewData)
    },

    get:async(req, res) => {
       const games= await db.Game.findAll()


        return res.json(games)
    },



    delete: async (req, res) => {
        await db.Game.destroy({
         where:{
             id:req.params.id
         }
        })
        const updatedGames = await db.Game.findAll()
        const genres = await db.Genre.findAll()

        const viewData = {
            games: updatedGames,
            genres : genres
        }

       return res.render('index', viewData)
    },

    addFavorite : async (req,res) => {
        const itemToAdd = req.body.fav.split(',')
        const alreadyExists = await db.Fav.findOne({
            where: {
                UserId: parseInt(itemToAdd[0]),
                GameId : parseInt(itemToAdd[1])
            }

        })
        console.log(alreadyExists)

        if(alreadyExists) {
            await alreadyExists.destroy()
            res.redirect(`/products/${parseInt(itemToAdd[1])}`)

        }else{
            await db.Fav.create({
                UserId: parseInt(itemToAdd[0]),
                GameId: parseInt(itemToAdd[1]),


            })
            res.redirect(`/products/${parseInt(itemToAdd[1])}`)
        }



    } , search: async (req, res) => {

      const games = await db.Game.findAll();
      const genres = await db.Genre.findAll();
      const consoles = await db.Platform.findAll();

      viewData = { games : games,
                   genres: genres,
                platform: consoles};
         res.render("search" , viewData)

    }

}






module.exports = productsController