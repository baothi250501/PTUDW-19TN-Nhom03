//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var AddressModelSchema = new Schema({
    _id: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    currentQuantity: {
        type: Number, min: 0, required: true
    },
    tankage: {
        type: Number, min: 0, required: true
    },
    type: {
        type: Number, min: 0, max: 3, required: true
    },
    status: {
        type: Boolean, required: true
    }
});

// Compile model from schema
mongoose.model('Address', AddressModelSchema );