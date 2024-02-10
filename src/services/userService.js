const User = require("../models/user");
const bcrypt = require('bcrypt');

exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    // Validate user
    if (!user) {
        throw new Error('Invalid email or password!');
    }
    // Validate password
    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password!');
    }

    return user;
};