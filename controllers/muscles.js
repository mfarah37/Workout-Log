const Muscle = require('../models/muscle')
const Workout = require('../models/workout')

module.exports = {
    new: newMuscles,
    create
}

function newMuscles(req, res) {
    Workout.findById(req.params.workoutId, function(err, workout) {
        Muscle.find({}, function(err, muscle) {
            res.render('muscles/new', { title: 'Add Muscle Group', workout})
        })
    })
}

function create(req, res) {
    Muscle.create(req.body, function(err, muscle) {
        res.redirect('/workouts/new')
    })
}