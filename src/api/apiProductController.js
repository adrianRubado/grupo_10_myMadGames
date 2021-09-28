const db = require ('../../database/models');
const sequelize = require ('sequelize') ;
const apiController = require('./apiController');

const apiProductController = {
    games: async (req,res) =>{
        const games = await db.Game.findAll ()
        res.json (games)
    }, 
    game:async(req,res )=>{ 
        const game = await db.Game.findByPk (req.params.id)
        res.json (game)

    }

}
module.exports = apiProductController