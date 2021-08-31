const path = require("path")
const fs = require("fs")
const db = require('../../database/models') ;


async function persistSess  (req, res, next)  {
    if (req.cookies.persistSession  && !req.session.user)

    {

        const user = await db.User.One({
            where:{
                email:req.body.email
            }
        });
        req.session.user = user;

    }
    next()};

    module.exports = persistSess;