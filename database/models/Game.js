const Genre = require("./Genre");
const Platform = require("./Platform");

module.exports = (sequelize, DataTypes) => {

    let cols = { game_id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 image:{type:dataTypes.STRING},

                 genre_id: { type: DataTypes.INTEGER,
                            allowNull: false,
                            references: {model: Genre, 
                                key: "genre_id"}
                            },

                 name: { type: DataTypes.STRING,
                                allowNull: false},
                 price: {type: DataTypes.DECIMAL,
                            allowNull: false}, // PRICE ES UNA MULTIPLICACIÓN X QTY

                 platform_id: { type: DataTypes.INTEGER,
                                allowNull: false,
                                references: {model: Platform,
                                    key: "platform_id"}
                                },

                 release: {type: DataTypes.INTEGER }, //INTEGER PORQUE ES UN AÑO
                 created_at: { type: DataTypes.DATE },
                 updated_at: { type: DataTypes.DATE },
                 descripcion: { type: DataTypes.STRING },
                 requirements: { type: DataTypes.STRING },
                 link: { type: DataTypes.STRING }
                };

    let config = {tableName: "Games"}

    const Game = sequelize.define("Games", cols, config);

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