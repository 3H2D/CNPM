const db = require("../models");

// Create main models
const HoKhau = db.hoKhau;


const addHoKhau = async(req, res) => {
    let info = {
        MaHo: req.body.MaHo,
        IdChuHo: req.body.IdChuHo,
        SoThanhVien: req.body.SoThanhVien,
        DiaChi: req.body.DiaChi
    }

    console.log(info);

    try {
        const hoKhau = await HoKhau.create(info);
        res.status(200).send(hoKhau);
        console.log(hoKhau);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
    
}

const getAllHoKhau = async (req, res) => {
    let hoKhau = await HoKhau.findAll({})
    res.status(200).send(hoKhau)
}

const updateHoKhau = async (req, res) => {
    let id = req.params.id

    const hoKhau = await HoKhau.update(req.body, {where: {MaHo: id}})
    res.status(200).send(hoKhau)
}

const deleteHoKhau = async (req, res) => {

    let id = req.params.id
    
    await HoKhau.destroy({ where: { maHo: id }} )

    res.status(200).json({success: true})

}

module.exports = {
    addHoKhau,
    getAllHoKhau,
    updateHoKhau,
    deleteHoKhau
}