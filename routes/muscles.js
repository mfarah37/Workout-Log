const express = require('express')
const router = express.Router()
const musclesCtrl = require('../controllers/muscles')

router.get('/muscles/new', musclesCtrl.new)
router.post('/muscles', musclesCtrl.create)

module.exports = router
