const db = require("../models");
const session = require('express-session');

// Create main models
const HoKhau = db.hoKhau;
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

const addHoKhau = async(req, res) => {
    let info = {
        MaHo: req.body.MaHo,
        IDChuHo: req.body.IDChuHo,
        SoThanhVien: req.body.SoThanhVien,
        DiaChi: req.body.DiaChi
    }

    console.log(info);

    if (HoKhau === undefined) {
        res.status(500).send("HoKhau object is undefined");
        return;
    }

    try {
        const hoKhau = await HoKhau.create(info);
        res.status(200).send(hoKhau);
        console.log(hoKhau);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
    
}


module.exports = {
    register,
    addHoKhau
}