const db = require ('../../database/models');
const sequelize = require ('sequelize') ;
const apiController = require('./apiController');

const apiProductController = {
    games: async (req,res) =>{
        const games = await db.Game.findAll ()
        const datos = games.map(juego => [id,naame,image,description,detail] = [juego.id,juego.name, juego.image, juego.description,`http://localhost:3002/api/products/${juego.id}`])
    let array = []
    let count = games.length
    datos.forEach(element => {

        let game = {
            Id : element[0],
            Name :element [1],
            Image :element [2],
            Description :element [3],
            Detail :element[4]
        }

        array.push (game)
    });
    let data ={
        count : count,
        games:array
    }



       return res.status(200).send(JSON.stringify(data))
    }
    ,
    game:async(req,res )=>{
        const game = await db.Game.findOne ({
            where :{
                id :req.params.id
            },
        attributes: {
            exclude: [ 'platformId']
        }
    })
        res.json (game)

    }
}
module.exports = apiProductController