module.exports = (sequelize, dataTypes) => {

    let cols = { id: { type: dataTypes.INTEGER,
                       primaryKey: true,
                       autoIncrement: true},
                 first_name: {type: dataTypes.STRING,
                              allowNull: false },
                 last_name: {type: dataTypes.STRING,
                             allowNull: false},
                 password: {type: dataTypes.STRING,
                            allowNull: false},
                 email: {type: dataTypes.STRING,
                            allowNull: false,
                        unique: true},
                 bday:{type: dataTypes.DATE,
                              allowNull:false },
                 image:{type:dataTypes.STRING,
                        defaultValue: null},
                 verify:{type:dataTypes.BOOLEAN,
                            defaultValue: 1},

                RoleId:{type:dataTypes.INTEGER,
                  //  model: Role,

                   // key: "role_id"
                }/* ,
            created_at:{type: dataTypes.DATE},
            updated_at:{type:dataTypes.DATE} */  } ;

    let config = { tableName:"Users",timestamps : false};

                const User = sequelize.define("User", cols, config);


                User.associate = (models)=>{
                    User.belongsToMany(models.Game,{
                        as : 'userCart',
                        through : 'Carts',
                        foreignKey : 'user_id',
                        otherKey : 'game_id'
                    }),
                User.hasMany(models.Purchase,{
                    as:'purchases'

                }),
                User.belongsTo(models.Role,{
                    as:"role",
                    foreignKey: "RoleId"
                })
                }
                return User;


 }
