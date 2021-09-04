const profileController = {

    profile: (req,res) => {

        user = req.session.user;

        const viewData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image
        }
        res.render('profile', viewData)
    }
}

module.exports = profileController