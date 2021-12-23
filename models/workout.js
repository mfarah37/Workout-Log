const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = {
    exercise: {
        type: String, 
        required: true
    },
    setNum: {
        type: Number,
        min: 1,
        required: true
    },
    weight: {
        type: Number, 
        required: true
    },
    reps: {
        type: Number,
        min: 1,
        required: true
    }
}
const workoutSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    muscleGroups: {type: Schema.Types.ObjectId, ref:'Muscle'},
    exercise: [exerciseSchema],
    calories: {
        type: Number,
        min: 0
    },
    content: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
})

module.exports = mongoose.model('Workout', workoutSchema)