const userController = require("../controllers/userController.js")
const hoKhauController = require("../controllers/hoKhauController.js")

// router
const router = require('express').Router()

// use routers
router.post('/register', userController.register)

router.post('/hokhau', hoKhauController.addHoKhau)
router.get('/hokhau', hoKhauController.getAllHoKhau)
router.put('/hokhau/:id', hoKhauController.updateHoKhau)
router.delete('/hokhau/:id', hoKhauController.deleteHoKhau)


module.exports = router