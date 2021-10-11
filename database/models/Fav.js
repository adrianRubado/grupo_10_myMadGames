module.exports = (sequelize, DataTypes) => {

    let cols = { id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 UserId: { type: DataTypes.INTEGER,
                            allowNull: false//,
                          //  references: { model: User,
                              //  key: "user_id"}
                            },
                 GameId: { type: DataTypes.INTEGER,
                            allowNull: false,
                            //references: {model: Game,
                                //key: "game_id"}
                            }/* ,
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE} */
                };

    let config = {tableName: "Favs",timestamps : false}

    const Fav = sequelize.define("Fav", cols, config);
    Fav.associate = (models)=>{
        Fav.belongsTo(models.User, {
          as: 'user',
          foreignKey: 'UserId'
        });
        Fav.belongsTo(models.Game, {
          as: 'game',
          foreignKey: 'GameId'
        });
  
    }
    return Fav;
}