module.exports = (sequelize, dataTypes) => {

let cols = {id:{type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true},
                name:{type:dataTypes.STRING,
                 allowNull: false,
                 unique: true}/* ,
            created_at:{type: dataTypes.DATE},
            updated_at:{type: dataTypes.DATE} */};


let config = {tableName:"Platforms",timestamps : false}

        const Platform = sequelize.define("Platform", cols, config);

        Platform.associate = (models)=>{
            Platform.hasMany(models.Game,{
                as : 'Games',

            })
        }
        return Platform
};