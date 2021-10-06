
const fs = require('fs');
const path = require('path');
/* const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8')); */
const { validationResult } = require('express-validator');
const db = require("../../database/models");
const Op = db.Sequelize.Op;



const productsController = {

    detail: async (req, res) => {
        const id = req.params.id

        const detail =  await db.Game.findByPk(id);



        const viewData = {
            game: detail
        }

        if (req.session && req.session.user) {
            return res.render('products', viewData);
        } else {
            return res.render('productsNotLogged', viewData);
        }

        return res.render('products', viewData);
    },

    create: async (req, res) => {
        const genres = db.Genre.findAll()
        const viewData = {
            genres: genres
        }

        res.render('createGame', viewData);
    },
    edit: async (req, res) => {
        const id = req.params.id

        const detail =  await db.Game.findByPk(id,
             { include:[{association:"gameGenre"}, {association:"gamePlatform"}]}) ;

        const platforms = await db.Platform.findAll();


        const genres = await db.Genre.findAll();
        const viewData = {
            game: detail,
            genres: genres,
            platforms: platforms
        }

        return res.render('editGame', viewData);
    },
    update: async (req, res) => {
        const id = req.params.id

        const errors = validationResult(req);

        if (errors.isEmpty()) {

        } else{ res.send(errors)}


            //res.render(`/products/${id}/edit`, {errors})} //

     if(!req.file) { await db.Game.update({
        name: req.body.name,
        price: req.body.price,
        platform: req.body.platform,
        description: req.body.description,
        link: req.body.link,                                                // en caso de no actualizar la imagen
        requirements: req.body.requirements,
        genre: req.body.genre
    },{
        where:{
            id:req.params.id
        }}
    )

     }else {


       await db.Game.update({
            name: req.body.name,
            price: req.body.price,
            platform: req.body.platform,
            description: req.body.description,
            link: req.body.link,
            image: "/images/" + req.file.originalname,   // en caso de que la imagen cambie
            requirements: req.body.requirements,
            genre: req.body.genre
        },{
            where:{
                id:req.params.id
            }}
        )}


        return res.redirect(`/products/${id}`)
             } ,

    post: async (req, res) => {

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
            category: 2,
            image: "/images/" + req.file.originalname,
            requirements: req.body.requirements,
            GenreId: genre.id
        })
        const games = await db.Game.findAll()
        const genres = await db.Genre.findAll()
        const viewData = {
            games: games,
            genres: genres
        }

        return res.render('index', viewData)
    },

    get: async (req, res) => {
        const games = await db.Game.findAll()


        return res.json(games)
    },



    delete: async (req, res) => {
        await db.Game.destroy({
            where: {
                id: req.params.id
            }
        })
        const updatedGames = await db.Game.findAll()
        const genres = await db.Genre.findAll()

        const viewData = {
            games: updatedGames,
            genres: genres
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



    } ,


    cartFavorite : async(req,res) =>{
        try {
            const data = req.body.data
        if(data.ops == 'add'){
            await db.Fav.create({
                UserId: data.userId,
                GameId: data.gameId
            })
        }

        if(data.ops == 'delete'){
            await db.Fav.destroy({
                where :{
                    UserId: data.userId,
                    GameId: data.gameId
                }
            })
        }
        res.json({message : 'operation successful'})
        } catch (error) {
            res.json({error : error.message})
        }



    },
    search: async (req, res) => {

        const games = await db.Game.findAll({
            include: [{ association: "gameGenre" }],
            where: { name: { [Op.like]: `%${req.query.q}%` } }
        });
        const genres = await db.Genre.findAll();
        const consoles = await db.Platform.findAll();

        viewData = {
            games: games,
            genres: genres,
            platform: consoles
        };
        res.render("search", viewData)

    },
    searchGenre: async (req,res) =>{
        const id = req.query
        const games = await db.Game.findAll({
            include:[{association:"gameGenre"}],
            where:  {GenreId:id.genre}
            });
        const genres = await db.Genre.findAll()
        const consoles = await db.Platform.findAll()
        viewData = { games : games,
            genres: genres,
         platform: consoles};
        res.render("search", viewData)
    }



}






module.exports = productsController