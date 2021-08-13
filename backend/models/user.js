const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: ['Firstname is a required field']
    },
    lastName: {
        type: String,
        required: ['Lastname is a required field']
    },
    email: {
        type: String,
        required: ['Email is a required field']
    },
    birthday: {
        type: Number,
        required: ['Date of birth is a required field']
    },
    password: {
        type: String,
        required: ['Password is a required field']
    }
});

module.exports = mongoose.model('User', userSchema)