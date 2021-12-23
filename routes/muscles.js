const express = require('express')
const router = express.Router()
const musclesCtrl = require('../controllers/muscles')
const isLoggedIn = require('../config/auth')

router.get('/muscles/new', isLoggedIn, musclesCtrl.new)
router.post('/muscles', isLoggedIn, musclesCtrl.create)

module.exports = router
