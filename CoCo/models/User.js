//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    _username: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    role: {
        type: String, required: true, enum : ['related people','manager'], default: 'related people'
    },
    isBlocked: {
        type: Boolean, required: true
    }
});

// Compile model from schema
module.exports = mongoose.model('User', UserModelSchema );