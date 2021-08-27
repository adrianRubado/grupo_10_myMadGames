const fs = require ('fs') ;
const path = require ('path') ;
const db = require("../../database/models");


 const indexController = {

    index: async(req,res) => {
        const genres = await db.Genre.findAll()
        const games = await db.Game.findall()
        const viewData = {

                titulo: 'My Mad Games',
            games: games ,
            genres:genres
        }






        res.render ('index',viewData);
    }
}






module.exports = indexController