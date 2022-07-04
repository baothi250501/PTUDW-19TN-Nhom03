const mongoose = require('mongoose');

const Package = mongoose.Schema({
    packageName: {
        type: String, required: true
    },
    image: {
        type: String, require: false, default: 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2Fprofile.png?alt=media&token=34e94b8d-cda6-4df8-8f4b-88a022d3b3fe'
    },
    productNum: {
        type: Number, required: true
    },
    packageNum: {
        type: Number, required: true
    },
    timeLimit: {
        type: Number, required: true
    },
    products:[
        {
            productName:{
                type: String,
                required: true
            },
            unit:{
                type: String,
                require: true
            },
            amount:{
                type: Number,
                require: true
            }
        }
    ]
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Package', Package);