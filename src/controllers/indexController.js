const fs = require ('fs') ;
const path = require ('path') ;
const db = require("../../database/models");


 const indexController = {

    index: async(req,res) => {
        try {
        const genres = await db.Genre.findAll()
        const games = await db.Game.findAll()
        console.log(games)
        const viewData = {

            titulo: 'My Mad Games',
            games: games ,
            genres:genres
        }






        res.render ('index',viewData);
        } catch (error) {
            res.json({errors : error.message})

        }
    }
}






module.exports = indexController