const mongoose = require('mongoose')

// food schema
const foodSchema = new mongoose.Schema({
    food: {
        type: String
    }
}, {timestamps: true})

module.exports = foodSchema