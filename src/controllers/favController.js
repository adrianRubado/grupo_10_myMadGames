const db = require("../../database/models");

const favController = {
    addFavorite: async (req, res) => {
        const itemToAdd = req.body.fav.split(',')
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
    
    
            })
            res.redirect(`/products/${parseInt(itemToAdd[1])}`)
        }
    
    
    
    }
}

module.exports = favController