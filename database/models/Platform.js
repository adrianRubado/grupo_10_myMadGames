module.exports = (sequelize, dataTypes) => { 

let cols = {id:{type: dataTypes.INTEGER, 
                primarykey: true,
                autoincrement: true},
            name:{type:dataTypes.STRING,
                  allowNull: false},
            created_at:{type: dataTypes.DATE},
            updated_at:{type: dataTypes.DATE}};
let config = {tablename:"Platforms"}

        const Platform = sequelize.define("Platforms", cols, config);
        return Platform 
};