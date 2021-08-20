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
                            allowNull: false,
                        unique: true},
                 bday:{type: dataTypes.DATE,
                              allowNull:false },
                 image:{type:dataTypes.STRING,
                        defaultValue: null},

<<<<<<< HEAD
                role:{type:dataTypes.INTEGER},
=======
                role_id:{type:dataTypes.INTEGER,
                    model: Role,
                    key: "role_id"},
>>>>>>> e7869ebca7381abe3e1909aa4ada73057a3ab897
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
<<<<<<< HEAD

=======
                    
                }),
                User.belongsTo(models.Role,{
                    as:"role",
                    foreignKey: "role_id"
>>>>>>> e7869ebca7381abe3e1909aa4ada73057a3ab897
                })
                }
                return User;


 }
