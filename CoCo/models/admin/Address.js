//Require Mongoose
var mongoose = require('mongoose');


//Define a schema
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;

var AddressModelSchema = new Schema({
    _id: {
        type: ObjectIdSchema,
        auto: true,
    },
    name: {
        type: String, required: true
    },
    number: {
        type: Number, min: 0, required: true
    },
    currentQuantity: {
        type: Number, min: 0
    },
    tankage: {
        type: Number, min: 0
    },
    type: {
        type: Number, min: 0, max: 3, required: true
    },
    status: {
        type: Boolean, required: true
    }
});

// Compile model from schema
module.exports = mongoose.model('Address', AddressModelSchema );