const path = require("path")
const fs = require("fs")
const userFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));


function persistSess (req, res, next) {
    if (req.cookies.persistSession  && !req.session.user)

    {
        const user = users.find(e=>e.email == req.cookies.persistSession);
        req.session.user = user;

    }
    next()};

    module.exports = persistSess;