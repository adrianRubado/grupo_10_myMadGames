
module.exports = (sequelize, DataTypes) => {

    let cols = { id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},

                 UserId: { type: DataTypes.INTEGER,
                            allowNull: false,
                            //references: {model: User,
                              //  key: "user_id"}
                            },
                 GameId: { type: DataTypes.INTEGER,
                            allowNull: false,
                           // references: {model: Game,
                               // key: "game_id"}
                            },
                 quantity: { type: DataTypes.INTEGER,
                            allowNull: false},
                 price: {type: DataTypes.DECIMAL,
                            allowNull: false}/* , // PRICE ES UNA MULTIPLICACIÓN X QTY
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE} */
                };

    let config = {tableName: "Carts",timestamps : false}

    const Cart = sequelize.define("Cart", cols, config);

    Cart.associate = (models)=>{
      Cart.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'UserId'
      });




  }

    return Cart;
}