module.exports = (sequelize, DataTypes) => {

    let cols = { role_id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 name: {type:DataTypes.STRING},
                 /* created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE} */
                };

    let config = {tableName: "Roles",timestamps : false}

    const Role = sequelize.define("Role", cols, config);

    Role.associate = (models)=>{
        Role.hasMany(models.User,{
            as : 'role',
        })
    }
    return Role;
}