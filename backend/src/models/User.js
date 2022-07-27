const {Schema,model} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    usersRegistered: {
        type: Number,
        required: true
    },
    heroes: {
        type: Array
    },
    lastTimeSystem: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('User',UserSchema);