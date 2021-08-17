const User = require("./User");
const Game = require("./Game")


module.exports = (sequelize, DataTypes) => { 

    let cols = { id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                       
                 user_id: { type: DataTypes.INTEGER,
                            allowNull: false, 
                            references: {model: User,
                                key: "user_id"}
                            },
                 game_id: { type: DataTypes.INTEGER,
                            allowNull: false,
                            references: {model: Game,
                                key: "game_id"}
                            },
                 quantity: { type: DataTypes.INTEGER,
                            allowNull: false},
                 price: {type: DataTypes.DECIMAL,
                            allowNull: false}, // PRICE ES UNA MULTIPLICACIÓN X QTY
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE}
                };

    let config = {tableName: "Carts"}

    const Cart = sequelize.define("Carts", cols, config);
    return Cart;
}