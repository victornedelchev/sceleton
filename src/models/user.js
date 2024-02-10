const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
        unique: [true, 'Email already exists!'],
    },
    password: {
        type: String,
        require: [true],
    },
});

userSchema.virtual('rePassword').set(function (value) {
    console.log({ value });
    if (value !== this.password) {
        throw new Error('Password mismatch!');
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;