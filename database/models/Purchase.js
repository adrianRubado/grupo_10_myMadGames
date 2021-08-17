const User = require("./user")
const Game = require("./game")

module.exports = (sequelize, DataTypes) => { 

let cols = {
              purchase_id : { type: DataTypes.INTEGER,
                autoIncrement: true,
                  primaryKey:true},

              user_id:{type: DataTypes.INTEGER,
                 allowNull: false,
                  references: {model: User,
                               key: "user_id"}
                            },

              game_id:{type: DataTypes.INTEGER,
                      allowNull: false,
                      references: {model: Game,
                      key: "game_id"} 
                    },

              quantift:{type: DataTypes.INTEGER,
              allowNull: false},

              price:{type: DataTypes.INTEGER, allowNull: false},

              total:{type: DataTypes.INTEGER, allowNull: false}           
             };
                    
                    
        let config = {tableName: "Purchase"};

        const Purchase =  sequelize.define("Purchase", cols, config);




          // associates 


         return Purchase;


}