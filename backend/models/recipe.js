const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    recipeTitle: {
        type: String,
        required: ['Recipe title is a required field']
    },
    category: {
        type: String,
        required: ['Category is a required field']
    },
    prepatarionTime: {
        type: Number,
        required: ['Preparation time is a required field ']
    },
    numberOfPeople: {
        type: Number,
        required: ['Number of people is a required field']
    },
    shortDescription: {
        type: String,
        required: ['Short description is a required field']
    },
    recipe: {
        type: String,
        required: ['Recipe is a required field']
    }
});

module.exports = mongoose.model('Recipe',recipeSchema);