<<<<<<< HEAD
const fs= require('fs') ;
const path = require ('path');
const {validationResult} = require('express-validator');
/* const userFilePath = path.join(__dirname, '../database/users.json');
const juegosFilePath = path.join(__dirname, '../database/games.json');
const juegos = JSON.parse (fs.readFileSync(juegosFilePath, 'utf-8'));
const userr = JSON.parse(fs.readFileSync(userFilePath, 'utf-8')); */
const db = require('../../database/models')
const bcrypt= require ('bcryptjs') ;
=======
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
>>>>>>> matias-dev
const jwt = require('jsonwebtoken');
const config = require('config');
const db = require('../../database/models');




const signInController = {

    signIn: (req, res) => {


        res.render('sign-in');
    },
    log: async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {

            return res.status(400).json({ errors: errors.array() });
        }


        try {
            const user = db.User.findAll({
                limit: 1,
                where: {
                    email: req.body.email
                }

            })

            if (user) {
                const password = user.password;
                const ismatch = bcrypt.compareSync(req.body.password, password)
                if (ismatch) {
                    if (req.body.persist) {
                        res.cookie('persistSession', user.email, { maxAge: (1000 * 60) * 20 })
                    }


                    req.session.user = user;
                    return res.redirect('/')
                }



            }
            return res.render('sign-in', { errors: { message: 'Invalid Credentials' } })

        } catch (err) {
            res.status(500).json({ errors: 'Server error' })
        }


    },

    logout: (req, res) => {

        if (req.cookies.persistSession) {
            res.clearCookie("persistSession");
        }

        req.session.destroy()

        return res.redirect('/')


    },

<<<<<<< HEAD
    profile : (req,res) =>{
        res.render ('profile')


=======
    profile: (req, res) => {
        res.render('profile')
>>>>>>> matias-dev

    }
}






module.exports = signInController