const Workout = require('../models/workout')

module.exports = {
    new: newExercise,
    create
}

function newExercise(req, res) {
    Workout.findById(req.params.workoutId, function(err, workout) {
        res.render('exercises/new', {title: 'Add Exercise', workout})
    })
}

function create(req, res) {
    Workout.findById(req.params.workoutId, function(err, workout) {
        workout.exercise.push(req.body)
        workout.save(function(err) {
            if(err) return res.redirect(`/workouts/${workout._id}/exercises/new`)
            res.redirect(`/workouts/${workout._id}`)
        })
    })
}
