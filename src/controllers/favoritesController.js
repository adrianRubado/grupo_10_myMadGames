const db = require('../../database/models')


const favoritesController = {
    getFavorites : (req,res) =>{
        res.render('favorites')
    },

    myFavorites : async (req,res) =>{

        try {
            const favs = await db.Fav.findAll({
                where : {
                    UserId : req.session.user.id
                }
            })

            let games = []
            for (let i = 0; i < favs.length; i++) {
                let g = await db.Game.findOne({
                    where : {
                        id : favs[i].dataValues.GameId
                    }
                })

               games.push(g)

            }

            console.log(games)
            const viewData = {
                games : games
            }

            console.log(games)
            res.render('favorites',viewData)
        } catch (error) {
            console.log(error.message)

        }

    }


}

module.exports = favoritesController