//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ManagerModelSchema = new Schema({
    _username: {
        type: String, required: true
    },
    role: {
        type: Number, min: 0, max: 3, required: true
    },
    status: {
        type: Boolean, required: true
    }
});

// Compile model from schema
module.exports = mongoose.model('Manager', ManagerModelSchema );