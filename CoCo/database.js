const mongoose = require('mongoose');
const uri = 'mongodb+srv://coco:coco123456@cluster0.yv2fgwq.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connect successfully!!');
 
    } catch (err) {
        console.log('Database connect failed!!');
        console.error(err);
    }
}

module.exports = { connect };