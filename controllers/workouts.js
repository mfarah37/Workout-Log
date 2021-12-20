const Workout = require('../models/workout')
const Muscle = require('../models/muscle')

module.exports = {
    index,
    new: newWorkout,
    show,
    create
}

function index(req, res) {
    Workout.find({}, function (err, workouts) {
        res.render('workouts/index', {
            title: 'Workouts Log',
            workouts
        })
    })
}

function newWorkout(req, res) {
    Muscle.find({}, function(err, muscles) {
        Workout.find({}, function(err, workout) {
            res.render('workouts/new', { title: 'Add Workout', workout, muscles })
        })
    })
}

function create(req, res) {
    const workout = new Workout(req.body)
    workout.save(function (err) {
        if (err) return res.redirect('/workouts/new')
        res.redirect(`/workouts/${workout._id}`)
    })
}

function show(req, res) {
    Workout.findById(req.params.workoutId, function (err, workout) {
        res.render('workouts/show', { title: 'Workout Details', workout })
    })
}
