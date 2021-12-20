const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts')

router.get('/', workoutsCtrl.index)
router.get('/new', workoutsCtrl.new)
router.get('/:workoutId', workoutsCtrl.show)
router.post('/', workoutsCtrl.create)

module.exports = router