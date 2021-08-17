module.exports = (sequelize, dataTypes) => {

    let cols = { user_id: { type: dataTypes.INTEGER,
                       primaryKey: true,
                       autoIncrement: true},
                 first_name: {type: dataTypes.STRING,
                              allowNull: false },
                 last_name: {type: dataTypes.STRING,
                             allowNull: false},
                 password: {type: dataTypes.STRING,
                            allowNull: false},
                 email: {type: dataTypes.STRING,
                            allowNull: false},
                 bday:{type: dataTypes.DATE,
                              allowNull:false },
                 image:{type:dataTypes.STRING,
                        defaultValue: null},

                rol:{type:dataTypes.INTEGER},
            created_at:{type: dataTypes.DATE},
            updated_at:{type:dataTypes.DATE}  } ;

    let config = { tableName:"Users"};

                const User = sequelize.define("Users", cols, config);


                User.associate = (models)=>{
                    User.belongsToMany(models.Game,{
                        as : 'userCart',
                        through : 'Carts',
                        foreignKey : 'user_id',
                        otherKey : 'game_id'
                    }),
                User.hasMany(models.Purchase,{
                    as:'purchases'
                    
                })
                }
                return User;
            

 }
