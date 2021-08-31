const Genre = require("./Genre");
const Platform = require("./Platform");

module.exports = (sequelize, DataTypes) => {

    let cols = { id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 image:{type: DataTypes.STRING},

                 GenreId: { type: DataTypes.INTEGER,
                            allowNull: false,

                            },

                 name: { type: DataTypes.STRING,
                                allowNull: false},
                 price: {type: DataTypes.DECIMAL,
                            allowNull: false},

                 PlatformId : { type: DataTypes.INTEGER,


                                },

                 release_year: {type: DataTypes.INTEGER },
                 /* created_at: { type: DataTypes.DATE },
                 updated_at: { type: DataTypes.DATE }, */
                 description: { type: DataTypes.STRING },
                 requirements: { type: DataTypes.STRING },
                 link: { type: DataTypes.STRING }
                };

    let config = {tableName: "Games",timestamps: false}

    const Game = sequelize.define("Game", cols, config);

    Game.associate = (models)=>{
        Game.belongsToMany(models.User,{
            as : 'userCart',
            through : 'Carts',
            foreignKey : 'game_id',
            otherKey : 'user_id'
        }),
        Game.belongsTo(models.Genre,{
            as : 'gameGenre',
            foreignKey : 'genreId'

        }),
        Game.belongsTo(models.Platform,{
            as : 'gamePlatform',
            foreignKey : 'platformId'

        })
    }
    return Game;
}