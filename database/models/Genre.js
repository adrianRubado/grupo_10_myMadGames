module.exports = (sequelize, DataTypes) => {

    let cols = { id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 name: { type: DataTypes.STRING,
                         allowNull: false,
                         unique: true},
               /*   created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE} */
                };

    let config = {tableName: "Genres",timestamps: false}

    const Genre = sequelize.define("Genre", cols, config);

    Genre.associate = (models)=>{
        Genre.hasMany(models.Game,{
            foreignKey: 'GenreId',
            as : 'gamesByGenre'
        })
    }
    return Genre;
}