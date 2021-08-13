module.exports = (sequelize, DataTypes) => { 

    let cols = { id: { type: DataTypes.INTEGER,
                       autoincrement: true,
                       primarykey:true},
                 id_user: { type: DataTypes.INTEGER,
                            allowNull: false},
                 id_game: { type: DataTypes.INTEGER,
                            allowNull: false},
                 created_at: { type: DataTypes.DATE},
                 updated_at: { type: DataTypes.DATE}
                };

    let config = {tablename: "Favs"}

    const Fav = sequelize.define("Favs", cols, config);
    return Fav;
}