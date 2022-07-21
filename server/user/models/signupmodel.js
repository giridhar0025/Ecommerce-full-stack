const mongoose = require('mongoose');

const SignUpSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email : {
        type : String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

const SignupModel = mongoose.model('usersignup', SignUpSchema)

module.exports = SignupModel;