const db = require ('../../database/models');
const sequelize = require ('sequelize') ;
const Op = db.Sequelize.Op;


const apiGenreController = { 

   genres :  async (req,res) => { 

    const genres =  await db.Genre.findAll({include:[{association:"gamesByGenre"}]});

    const genre = [ ]


    genres.forEach(element => { 
        
        genre.push({id: element.id,
            name:element.name, 
            detail: "http://localhost:3002/api/genres/"+element.id,
            games: element.gamesByGenre})
    
    });

    
    


    const data = await{ count: genres.length, 
                        genres : genre,
                        }

    res.json(data);

   }, 
   gamesByGenre : async (req,res) => { 
  const genre = await db.Genre.findByPk(req.params.id);

    const gamesByGenre = await db.Game.findAll({include:[{association:"gameGenre"},{association:"gamePlatform"}],  where:{
        GenreId:req.params.id
    }}) ;
    
    const games = []
            
            gamesByGenre.forEach(element => {

            games.push( {
                          id: element.id, 
                          name: element.name,
                           image: element.image,
                            price: element.price,
                             genre: element.gameGenre.name,
                            platform: element.gamePlatform.name,
                            description: element.description,
                            requirements: element.requirements,
                            link: element.link,
                        detail: "http://localhost:3002/api/products/"+element.id })
                
            });

     const count = gamesByGenre.length;

    const  data =  { 
        name : genre.name,
        count : count,
                
                   games :games}

   res.json(data) 

   }


}

module.exports = apiGenreController
