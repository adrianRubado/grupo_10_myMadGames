module.exports = (sequelize, DataTypes) => {

    let cols = { role_id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 name: {type:DataTypes.STRING},               
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE}
                };

    let config = {tableName: "Role"}

    const Role = sequelize.define("Role", cols, config);
    
    Role.associate = (models)=>{
        Role.hasMany(models.User,{
            as : 'role_id',
        })
    }
    return Role;
}