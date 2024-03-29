const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    name:String,
    passwordHash: String,
    ActivationToken: String,
    isActive: {
        type: Boolean,
        default:false
    },
    entries: {
        type:Array,
        default: [],
        ref:"entry"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt:Date

});
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;