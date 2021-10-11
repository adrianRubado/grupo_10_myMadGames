const db = require ('../../database/models');
const sequelize = require ('sequelize') ;
const Op = db.Sequelize.Op;


const apiPlatformController = { 

    platforms :  async (req,res) => { 

        const platforms =  await db.Platform.findAll();
    
        const platform = []
    
    
        platforms.forEach(element => { 
            
            platform.push({id: element.id,
                name:element.name, 
                detail: "http://localhost:3002/api/platforms/"+element.id})
        
        });
    
        
        
    
    
        const data = await{ count: platforms.length, 
                            platforms : platform,
                            }
    
        res.json(data);
    
       },
   gamesPlatform : async (req,res) => { 

           
          const platform = await db.Platform.findByPk(req.params.id);
    const gamesByPlatform = await db.Game.findAll({include:[{association:"gameGenre"},{association:"gamePlatform"}],  where:{
        PlatformId :req.params.id
    }}) ;
    const games = []
            
            gamesByPlatform.forEach(element => {

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

     const count = gamesByPlatform.length;

    const  data =  { 
        name : platform.name,
        count : count,
                
                   games :games}

   res.json(data) 

   }
}

module.exports = apiPlatformController
