const db = require ('../../database/models');
const sequelize = require ('sequelize') ;
const Op = db.Sequelize.Op;


const apiGenreController = { 

   genres :  async (req,res) => { 

    const genres =  await db.Genre.findAll()


    const data = await{ count: genres.length, 
                        genres : genres }

    res.json(data);

   }, 
   gamesByGenre : async (req,res) => { 


         const genre = await db.Genre.findByPk(req.params.id);
    const gamesByGenre = await db.Game.findAll({include:[{association:"gameGenre"}],  where:{
        GenreId:req.params.id
    }})

    const  data =  await { 
        name : genre.name,
        count : gamesByGenre.length,
                
                   games :gamesByGenre}

   res.json(data) 

   }


}

module.exports = apiGenreController
