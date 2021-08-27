const Genre = require("./Genre");
const Platform = require("./Platform");

module.exports = (sequelize, DataTypes) => {

    let cols = { game_id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 image:{type: DataTypes.STRING},

                 genre_id: { type: DataTypes.INTEGER,
                            allowNull: false,
                           
                            },

                 name: { type: DataTypes.STRING,
                                allowNull: false},
                 price: {type: DataTypes.DECIMAL,
                            allowNull: false},

                 platform_id: { type: DataTypes.INTEGER,
                                allowNull: false,
                               
                                },

                 release: {type: DataTypes.INTEGER }, 
                 created_at: { type: DataTypes.DATE },
                 updated_at: { type: DataTypes.DATE },
                 description: { type: DataTypes.STRING },
                 requirements: { type: DataTypes.STRING },
                 link: { type: DataTypes.STRING }
                };

    let config = {tableName: "Games"}

    const Game = sequelize.define("Game", cols, config);

    Game.associate = (models)=>{
        Game.belongsToMany(models.User,{
            as : 'userCart',
            through : 'Carts', 
            foreignKey : 'game_id',
            otherKey : 'user_id' 
        }),
        Game.belongsTo(models.Genre,{
            as : 'Genre',
            foreignKey : 'genre_id'

        }),
        Game.belongsTo(models.Platform,{
            as : 'Platform',
            foreignKey : 'platform_id'

        })
    }
    return Game;
}