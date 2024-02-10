const { MongooseError } = require("mongoose");

exports.extractErrorMsgs = (error) => {
    const isInstanceOfMongoose = error instanceof MongooseError;

    if (isInstanceOfMongoose) {
        const errors = Object.values(error.errors)
        const msg = errors.map( e => e.message);

        return msg;
    }

    return [error.message];
};