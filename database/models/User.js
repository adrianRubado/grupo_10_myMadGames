module.exports = (sequelize, dataTypes) => {

    let cols = { id: { type: dataTypes.INTEGER,
                       primarykey: true,
                       autoincrement: true},
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
                 image:{type:dataTypes.STRING},
                 
                rol:{type:dataTypes.INTEGER},
            created_at:{type: dataTypes.DATE},
            updated_at:{type:dataTypes.DATE}  } ;

    let config = { tableName:"Users"
 };

                const User = sequelize.define("Users", cols, config);
                return User;
                // assosiate

 }
