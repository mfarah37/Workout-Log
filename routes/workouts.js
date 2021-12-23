const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts')
const isLoggedIn = require('../config/auth')

router.get('/', workoutsCtrl.index)
router.get('/new', isLoggedIn, workoutsCtrl.new)
router.get('/:workoutId', workoutsCtrl.show)
router.post('/', isLoggedIn, workoutsCtrl.create)
router.delete('/:workoutId', isLoggedIn, workoutsCtrl.deleteWorkout)
router.get('/:workoutId/edit', isLoggedIn, workoutsCtrl.edit)
router.put('/:workoutId', isLoggedIn, workoutsCtrl.update)

module.exports = router