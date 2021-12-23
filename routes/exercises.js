const express = require('express')
const router = express.Router()
const exercisesCtrl = require('../controllers/exercises')
const isLoggedIn = require('../config/auth')

router.get('/workouts/:workoutId/exercises/new', isLoggedIn, exercisesCtrl.new)
router.post('/workouts/:workoutId/exercises', isLoggedIn, exercisesCtrl.create)

module.exports = router

