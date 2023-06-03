const hoKhauController = require("../controllers/hoKhauController.js")

// router
const router = require('express').Router()

// use routers
router.post('/register', hoKhauController.register)
router.post('/themhokhau', hoKhauController.addHoKhau)


module.exports = router