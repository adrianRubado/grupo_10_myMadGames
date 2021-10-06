const db = require("../../database/models");
const sequelize = require('sequelize');
const favController = {
    view: async (req, res) => {
        const favorites = await db.Fav.findAll({
            where: {
                GameId: req.session.GameId,
            }
        });
        const viewData = {
            games: favorites
        }
        res.render('favorites', viewData);
    },
    addFavorite: async (req, res) => {
        const itemToAdd = req.body.Fav.split(',')
        const alreadyExists = await db.Fav.findOne({
            where: {
                UserId: parseInt(itemToAdd[0]),
                GameId: parseInt(itemToAdd[1])
            }

        })
        console.log(alreadyExists)

        if (alreadyExists) {
            await alreadyExists.destroy()
            res.redirect(`/products/${parseInt(itemToAdd[1])}`)

        } else {
            await db.Fav.create({
                UserId: parseInt(itemToAdd[0]),
                GameId: parseInt(itemToAdd[1]),
            });
            res.redirect(`/products/${parseInt(itemToAdd[1])}`)
        }



    }
}

module.exports = favController