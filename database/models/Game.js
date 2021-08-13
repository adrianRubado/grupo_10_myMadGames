module.exports = (sequelize, DataTypes) => { 

    let cols = { id: { type: DataTypes.INTEGER,
                       autoincrement: true,
                       primarykey:true},
                 image:{type:dataTypes.STRING},
                 id_genre: { type: DataTypes.INTEGER,
                            allowNull: false},
                 name: { type: DataTypes.STRING,
                                allowNull: false},
                 price: {type: DataTypes.DECIMAL,
                            allowNull: false}, // PRICE ES UNA MULTIPLICACIÓN X QTY
                 id_platform: { type: DataTypes.INTEGER,
                                allowNull: false},
                 release: {type: DataTypes.INTEGER }, //INTEGER PORQUE ES UN AÑO
                 created_at: { type: DataTypes.DATE },
                 updated_at: { type: DataTypes.DATE },
                 descripcion: { type: DataTypes.STRING },
                 requirements: { type: DataTypes.STRING },
                 link: { type: DataTypes.STRING }
                };

    let config = {tablename: "Games"}

    const Game = sequelize.define("Games", cols, config);
    return Game;
}