//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;

var ManagerModelSchema = new Schema({
    _id: {
        type: ObjectIdSchema,
        auto: true,
    },
    username: {
        type: String, required: true
    },
    password: {
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