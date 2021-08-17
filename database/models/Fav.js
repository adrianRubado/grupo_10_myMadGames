const User = require("./user");
const Game = require("./Game")

module.exports = (sequelize, DataTypes) => { 

    let cols = { fav_id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 user_id: { type: DataTypes.INTEGER,
                            allowNull: false,
                            references: { model: User,
                                key: "user_id"}},
                 game_id: { type: DataTypes.INTEGER,
                            allowNull: false, 
                            references: {model: Game,
                                key: "game_id"}},
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE}
                };

    let config = {tableName: "Favs"}

    const Fav = sequelize.define("Favs", cols, config);
    return Fav;
}