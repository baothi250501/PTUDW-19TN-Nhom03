const mongoose = require('mongoose');

const Product = mongoose.Schema({
    name: {
        type: String, required: true
    },
    images: {
        type: Array, of: String, require: false, default: 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2Fprofile.png?alt=media&token=34e94b8d-cda6-4df8-8f4b-88a022d3b3fe'
    },
    image: {
        type: String, require: false, default: 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2Fprofile.png?alt=media&token=34e94b8d-cda6-4df8-8f4b-88a022d3b3fe'
    },
    price: {
        type: Number, required: true
    },
    unit: {
        type: String, required: true
    },
    weight: {
        type: Number, required: true
    },
},
    {
        timestamps: true, // thời gian tạo và thời gian cập nhật
    });

module.exports = mongoose.model('Product', Product);