const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    firstName: {
        type: String,
        require: [true],
    },
    lastName: {
        type: String,
        require: [true],
    },
    email: {
        type: String,
        require: [true],
        unique: true,
    },
    password: {
        type: String,
        require: [true],
    },
});

const User = mongoose.model('User', userScheme);

module.exports = User;