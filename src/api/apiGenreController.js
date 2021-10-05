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

    const gamesByGenre = await db.Genre.findAll({include:[{association:"gamesByGenre"}],  where:{
        id:req.params.id
    }})

    const  data =  await { count : gamesByGenre,
                
                   games :gamesByGenre}

   res.json(data) 

   }


}

module.exports = apiGenreController
