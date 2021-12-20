const mongoose = require('mongoose')
const Schema = mongoose.Schema

const muscleSchema = new Schema({
    muscles: {type: String}
})

module.exports = mongoose.model('Muscle', muscleSchema)