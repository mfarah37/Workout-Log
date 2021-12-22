const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts')

router.get('/', workoutsCtrl.index)
router.get('/new', workoutsCtrl.new)
router.get('/:workoutId', workoutsCtrl.show)
router.post('/', workoutsCtrl.create)
router.delete('/:workoutId', workoutsCtrl.deleteWorkout)
router.get('/:workoutId/edit', workoutsCtrl.edit)
router.put('/:workoutId', workoutsCtrl.update)

module.exports = router