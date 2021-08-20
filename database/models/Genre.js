module.exports = (sequelize, DataTypes) => {

    let cols = { genre_id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 name: { type: DataTypes.STRING,
                         allowNull: false,
                         unique: true},
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE}
                };

    let config = {tableName: "Genres"}

    const Genre = sequelize.define("Genres", cols, config);
    
    Genre.associate = (models)=>{
        Genre.hasMany(models.Game,{
            as : 'Games',
        })
    }
    return Genre;
}