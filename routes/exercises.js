const express = require('express')
const router = express.Router()
const exercisesCtrl = require('../controllers/exercises')

router.get('/workouts/:workoutId/exercises/new', exercisesCtrl.new)
router.post('/workouts/:workoutId/exercises', exercisesCtrl.create)

module.exports = router

