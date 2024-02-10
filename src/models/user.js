const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    if (value !== this.password) {
        throw new Error('Password mismatch!');
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;