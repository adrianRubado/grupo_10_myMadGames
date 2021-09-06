
module.exports = (sequelize, DataTypes) => {

    let cols = {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        purchase_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          //  references: {
              //  model: Purchase,
              //  key: "purchase_id"
           // }

        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          //  references: {
              //  model: Game,
              //  key: "game_id"
          //  }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price:{
            type:DataTypes.NUMBER,
            allowNull: false
        }/* ,

        created_at: { type: DataTypes.DATE },
        updated_at: { type: DataTypes.DATE } */
    }
    let config = {tableName:"Products",timestamps : false}
    const Product = sequelize.define('Product',cols, config);
    Product.associate = function(models){
        Product.belongsTo(models.Purchase,{
            as:'purchase',
            foreignKey:'purchase_id'
        })


    }
    return Product;
}
