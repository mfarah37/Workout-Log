const Workout = require('../models/workout')
const Muscle = require('../models/muscle')

module.exports = {
    index,
    new: newWorkout,
    show,
    create,
    deleteWorkout,
    edit,
    update 
}

function index(req, res) {
    Workout.find({})
    .populate('muscleGroups').exec(function (err, workouts) {
        res.render('workouts/index', { title: 'Workouts Log', workouts })
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
    workout.user = req.user._id
    workout.userName = req.user.name 
    workout.userAvatar = req.user.avatar 
    workout.save(function (err) {
        if (err) return res.redirect('/workouts/new')
        res.redirect(`/workouts/${workout._id}`)
    })
}

function show(req, res) {
    Workout.findById(req.params.workoutId)
    .populate('muscleGroups').exec(function (err, workout) {
        res.render('workouts/show', { title: 'Workout Details', workout })
    })
}

function deleteWorkout(req, res) {
    Workout.findByIdAndDelete(req.params.workoutId, req.body, function(err, workout) {
        res.redirect('/workouts')
    })
}

function edit (req, res) {
    Workout.findById(req.params.workoutId, function(err, workout) {
        res.render('workouts/edit', { title: 'Edit Workout', workout})
    })
}

function update(req, res) {
    Workout.findByIdAndUpdate(req.params.workoutId, req.body, function(err, workout) {
        if (err) return res.redirect(`workouts/${workout._id}/edit`)
        res.redirect(`/workouts/${workout._id}`)
    })
}
