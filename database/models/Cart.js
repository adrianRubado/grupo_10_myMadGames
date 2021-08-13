module.exports = (sequelize, DataTypes) => { 

    let cols = { id: { type: DataTypes.INTEGER,
                       autoincrement: true,
                       primarykey:true},
                 id_user: { type: DataTypes.INTEGER,
                            allowNull: false},
                 id_game: { type: DataTypes.INTEGER,
                            allowNull: false},
                 quantity: { type: DataTypes.INTEGER,
                            allowNull: false},
                 price: {type: DataTypes.DECIMAL,
                            allowNull: false}, // PRICE ES UNA MULTIPLICACIÓN X QTY
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE}
                };

    let config = {tablename: "Carts"}

    const Cart = sequelize.define("Carts", cols, config);
    return Cart;
}