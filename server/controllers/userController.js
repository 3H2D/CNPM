const db = require("../models");

const User = db.user;

const register = async (req, res) => {
    let info = {
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    }

    const newUser = await new User(info)
    newUser.save()

    res.redirect('/login')
}

module.exports = {
    register
}