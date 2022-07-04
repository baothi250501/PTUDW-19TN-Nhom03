//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ManagerHistoryModelSchema = new Schema({
    _username: {
        type: String, required: true
    },
    date: {
        type: Date, required: true,
    },
    action: {
        type: String, required: true
    }
});

// Compile model from schema
module.exports = mongoose.model('ManagerHistory', ManagerHistoryModelSchema );