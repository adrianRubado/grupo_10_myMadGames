module.exports = (sequelize, DataTypes) => { 


    let cols = { id: { type: DataTypes.INTEGER,
                       autoincrement: true,
                       primarykey:true},
                 name: { type: DataTypes.STRING}};

    let config = {tablename: "Genres"}




    const Genre = sequelize.define("Genres", cols, config);
    return Genre;
}