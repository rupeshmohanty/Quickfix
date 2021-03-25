const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 6
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
},{
    timestamps: true,
})

const user = mongoose.model('User', userSchema)

module.exports = user;