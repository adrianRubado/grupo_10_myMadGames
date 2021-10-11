const profileController = {

    profile: (req,res) => {

        user = req.session.user;

        const viewData = {
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            image: user.image,
            bday: user.bday,
            since: user.created_at,
        }
        res.render('profile', viewData)
    }
}

module.exports = profileController