const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/bankDB');

const databSchema = new mongoose.Schema({
    Date: Date,
    payment: String
});

const Datab = mongoose.model("Datab", databSchema);

module.exports = Datab;