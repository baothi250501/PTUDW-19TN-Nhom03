const mongoose = require('mongoose');

const Person = mongoose.Schema({
    username: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    gender: {
        type: Number, require: true
    },
    DOB: {
        type: Date, require: true
    },
    address: {
        type: String, require: true
    },
    management: {
        status: {
            type: String, require: true
        },
        place: {
            type: String, require: true
        }
    },
    debt: {
        type: Number, require: true
    },
    balance: {
        type: Number, require: true
    },
    avatar: {
        type: String, require: false, default: 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2Fprofile.png?alt=media&token=34e94b8d-cda6-4df8-8f4b-88a022d3b3fe'
    }
},
    {
        timestamps: true, // thời gian tạo và thời gian cập nhật
    });

module.exports = mongoose.model('Person', Person);