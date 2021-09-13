const User = require("./user")
const Game = require("./game")

module.exports = (sequelize, DataTypes) => {

let cols = {
              purchase_id : { type: DataTypes.INTEGER,
                autoIncrement: true,
                  primaryKey:true},

              UserId:{type: DataTypes.INTEGER,
                 allowNull: false,
                 // references: {model: User,
                     //          key: "user_id"}
                            },
                            status:{
                              type:DataTypes.STRING,
                              allowNull: false
                            },


              total:{type: DataTypes.INTEGER, allowNull: false}
             };


        let config = {tableName: "Purchase"};

        const Purchase =  sequelize.define("Purchase", cols, config);
        Purchase.associate=function (models) {
          Purchase.belongsTo(models.User,{
            as:'user',
            foreignKey:'user_id'
          })
          Purchase.hasMany(models.Product,{
            as:'Products'
          })
        }




          // associates


         return Purchase;


}