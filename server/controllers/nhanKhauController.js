const db = require("../models");

// Create main models
const NhanKhau = db.nhanKhau;

const addNhanKhau = async(req, res) => {
    let info = {
        CCCD: req.body.CCCD,
        Ten: req.body.Ten,
        Tuoi: req.body.Tuoi,
        SDT: req.body.SDT
    }

    console.log(info);

    try {
        const nhanKhau = await NhanKhau.create(info);
        res.status(200).send(nhanKhau);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
    
}

const getAllNhanKhau = async (req, res) => {
    let nhanKhau = await NhanKhau.findAll({})
    res.status(200).send(nhanKhau)
}

const updateNhanKhau = async (req, res) => {
    let id = req.params.id

    const nhanKhau = await HoKhau.update(req.body, {where: {id: id}})
    res.status(200).send(nhanKhau)
}

const deleteNhanKhau = async (req, res) => {

    let id = req.params.id
    
    await NhanKhau.destroy({ where: { id: id }} )

    res.status(200).json({success: true})

}

module.exports = {
    addNhanKhau,
    getAllNhanKhau,
    updateNhanKhau,
    deleteNhanKhau
}