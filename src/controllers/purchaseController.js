const db = require("../../database/models");
const purchaseController = {

    purchase: async(req,res) => {
        try {
        const genres = await db.Genre.findAll()
        const games = await db.Game.findAll()

        const viewData = {

            titulo: 'My Mad Games',
            games: games ,
            genres:genres
        }






        res.render ('purchase',viewData);
        } catch (error) {
            res.json({errors : error.message})

        }
    }
}






module.exports = purchaseController