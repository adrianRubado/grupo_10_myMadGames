const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
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
            const user = await db.User.findOne({
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

                    if(user.verify == 2){
                        req.session.user = user;
                        return res.redirect('/')
                    }

                }



            }
            return res.status(400).json ({errors: 'Credenciales Invalidas'})
           

        } catch (err) {
            res.status(500).json({ errors: 'Credenciales Invalidas' })
        }


    },

    logout: (req, res) => {

        if (req.cookies.persistSession) {
            res.clearCookie("persistSession");
        }

        req.session.destroy()

        return res.redirect('/')


    },

    profile: (req, res) => {
        res.render('profile')

    }
}






module.exports = signInController