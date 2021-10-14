const db = require('../../database/models')


const favoritesController = {
    deleteFavorite : async(req,res) =>{
        try{

            await db.Fav.destroy({
                where : {
                    UserId : req.session.user.id,
                    GameId : req.body.gameId
                }
            })
            res.status(200).json({message : 'fav deleted'})

        }catch(error){
            console.log(error.message)
        }
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