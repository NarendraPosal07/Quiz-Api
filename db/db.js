const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Quize-Api').then((req, res) => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose
