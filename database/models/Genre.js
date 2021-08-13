module.exports = (sequelize, DataTypes) => { 

    let cols = { id: { type: DataTypes.INTEGER,
                       autoincrement: true,
                       primarykey:true},
                 name: { type: DataTypes.STRING,
                         allowNull: false},
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE}               
                };

    let config = {tablename: "Genres"}

    const Genre = sequelize.define("Genres", cols, config);
    return Genre;
}