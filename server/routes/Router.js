const userController = require("../controllers/userController.js")
const hoKhauController = require("../controllers/hoKhauController.js")
const nhanKhauController = require("../controllers/nhanKhauController.js")

// router
const router = require('express').Router()

// use routers
router.post('/register', userController.register)

router.post('/hokhau', hoKhauController.addHoKhau)
router.get('/hokhau', hoKhauController.getAllHoKhau)
router.put('/hokhau/:id', hoKhauController.updateHoKhau)
router.delete('/hokhau/:id', hoKhauController.deleteHoKhau)

router.post("/nhankhau", nhanKhauController.addNhanKhau)
router.get('/nhankhau', nhanKhauController.getAllNhanKhau)
router.put('/nhankhau/:id', nhanKhauController.updateNhanKhau)
router.delete('/nhankhau/:id', nhanKhauController.deleteNhanKhau)

module.exports = router