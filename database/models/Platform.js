module.exports = (sequelize, dataTypes) => {

let cols = {platform_id:{type: dataTypes.INTEGER,
                primarykey: true,
                autoincrement: true},
            name:{type:dataTypes.STRING,
                  allowNull: false},
            created_at:{type: dataTypes.DATE},
            updated_at:{type: dataTypes.DATE}};
let config = {tablename:"Platforms"}

        const Platform = sequelize.define("Platforms", cols, config);

        Platform.associate((models)=>{
            Platform.hasMany(models.Games,{
                as : 'Games',

            })
        })
        return Platform
};